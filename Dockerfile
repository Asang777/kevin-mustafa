# syntax=docker/dockerfile:1.7

############################
# 1) Build stage (Astro)
############################
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build static site
COPY . .
RUN npm run build

############################
# 2) Runtime stage (hardened Nginx)
############################
FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime

# Elevate to root only for image filesystem setup
USER root

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Astro output
COPY --from=builder --chown=101:0 /app/dist/ /usr/share/nginx/html/

# Hardened Nginx config:
# - non-root port
# - strict security headers
# - SPA fallback disabled (this is a static profile site)
# - hidden files blocked
RUN printf '%s\n' \
'server {' \
'  listen 8080;' \
'  server_name _;' \
'  root /usr/share/nginx/html;' \
'  index index.html;' \
'' \
'  add_header X-Frame-Options "SAMEORIGIN" always;' \
'  add_header X-Content-Type-Options "nosniff" always;' \
'  add_header Referrer-Policy "strict-origin-when-cross-origin" always;' \
'  add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;' \
'  add_header Cross-Origin-Opener-Policy "same-origin" always;' \
'  add_header Cross-Origin-Resource-Policy "same-origin" always;' \
'  add_header X-XSS-Protection "1; mode=block" always;' \
'' \
'  # Block hidden files except ACME challenge (if used)' \
'  location ~ /\.(?!well-known).* {' \
'    deny all;' \
'  }' \
'' \
'  location / {' \
'    try_files $uri $uri/ =404;' \
'  }' \
'' \
'  # Basic cache for immutable static assets' \
'  location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2?)$ {' \
'    expires 30d;' \
'    add_header Cache-Control "public, max-age=2592000, immutable";' \
'    try_files $uri =404;' \
'  }' \
'}' \
> /etc/nginx/conf.d/default.conf

# Drop privileges for runtime
USER 101

EXPOSE 8080

# Healthcheck for container orchestration
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
