export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
};

export type SocialLink = {
  platform: string;
  href: string;
  handle?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  employmentType: "Freelance" | "Full-time" | "Part-time" | "Contract";
  start: string; // YYYY-MM
  end: string | "Present";
  achievements: string[];
  technologies: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  graduationYear: number;
  focus?: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export type ProfileData = {
  seo: {
    title: string;
    description: string;
    locale: string;
    siteName: string;
    keywords: string[];
  };
  identity: {
    fullName: string;
    headline: string;
    location: string;
    email: string;
    avatar: string;
    availability: string;
  };
  summary: string;
  contacts: ContactChannel[];
  socials: SocialLink[];
  coreStrengths: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  highlights: string[];
};

export const profile: ProfileData = {
  seo: {
    title: "Kevin Mustafa | Fullstack Developer & DevOps Engineer",
    description:
      "Personal profile of Kevin Mustafa, an IT specialist focused on fullstack web development, cloud infrastructure, and high-performing digital products.",
    locale: "en_US",
    siteName: "kevin-mustafa.com",
    keywords: [
      "Kevin Mustafa",
      "Fullstack Developer",
      "DevOps Engineer",
      "IT Specialist",
      "AWS",
      "Cloud Infrastructure",
      "React",
      "Node.js",
      "TypeScript",
      "Personal Website",
    ],
  },

  identity: {
    fullName: "Kevin Mustafa",
    headline: "Fullstack Developer & DevOps Engineer",
    location: "Jakarta, Indonesia",
    email: "kevinmustafa1993@gmail.com",
    avatar: "/images/kevin-mustafa.webp",
    availability: "Open for freelance and remote opportunities",
  },

  summary:
    "Dedicated IT specialist with hands-on experience in fullstack web development and cloud infrastructure. Proven ability to deliver reliable, scalable products while collaborating across distributed teams and managing the full lifecycle from architecture to deployment.",

  contacts: [
    {
      label: "Email",
      value: "kevinmustafa1993@gmail.com",
      href: "mailto:kevinmustafa1993@gmail.com",
    },
    {
      label: "Location",
      value: "Jakarta, Indonesia",
    },
  ],

  socials: [
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com",
      handle: "Kevin Mustafa",
    },
    {
      platform: "GitHub",
      href: "https://github.com",
      handle: "kevinmustafa",
    },
  ],

  coreStrengths: [
    "Fullstack architecture and implementation",
    "Cloud-native deployments on AWS",
    "DevOps automation and CI/CD",
    "Performance, reliability, and maintainability",
    "Remote collaboration and ownership mindset",
  ],

  experience: [
    {
      role: "Fullstack Developer & DevOps Engineer",
      company: "Self Employed / Freelancer",
      location: "Remote",
      employmentType: "Freelance",
      start: "2024-01",
      end: "Present",
      achievements: [
        "Delivered end-to-end web solutions from product planning to production deployment.",
        "Designed and maintained AWS-based infrastructure for reliability and cost efficiency.",
        "Implemented CI/CD pipelines and operational best practices across projects.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "Docker",
        "AWS",
        "PostgreSQL",
      ],
    },
    {
      role: "DevOps Engineer",
      company: "PT Alpha Indo Soft",
      location: "West Jakarta, Indonesia",
      employmentType: "Full-time",
      start: "2023-01",
      end: "2023-12",
      achievements: [
        "Managed AWS cloud infrastructure and deployment workflows.",
        "Improved deployment consistency with automation and environment standardization.",
        "Enhanced system observability and operational responsiveness.",
      ],
      technologies: ["AWS", "Docker", "Linux", "CI/CD", "Nginx", "Monitoring"],
    },
    {
      role: "Frontend Developer",
      company: "PT Alpha Indo Soft",
      location: "West Jakarta, Indonesia",
      employmentType: "Full-time",
      start: "2021-10",
      end: "2023-12",
      achievements: [
        "Built dashboard interfaces and interactive frontend features.",
        "Developed game-related frontend modules using canvas-based rendering.",
        "Collaborated with product and backend teams for high-quality releases.",
      ],
      technologies: ["TypeScript", "React", "HTML5 Canvas", "JavaScript", "CSS"],
    },
    {
      role: "Fullstack IT Project Manager",
      company: "Kororo Pty. Ltd.",
      location: "Sydney, Australia (Remote)",
      employmentType: "Full-time",
      start: "2020-08",
      end: "2021-10",
      achievements: [
        "Led fullstack initiatives and coordinated cross-functional execution.",
        "Handled server operations and deployment lifecycle for web platforms.",
        "Contributed to architecture decisions and project delivery quality.",
      ],
      technologies: ["React", "TypeScript", "Python", "Linux", "Web APIs"],
    },
    {
      role: "Fullstack Developer",
      company: "PT Yes Dok Indonesia",
      location: "Central Jakarta, Indonesia",
      employmentType: "Full-time",
      start: "2017-08",
      end: "2020-08",
      achievements: [
        "Built and maintained internal and customer-facing web systems.",
        "Supported server management and application reliability improvements.",
        "Delivered features across frontend and backend stacks.",
      ],
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Linux"],
    },
    {
      role: "Senior Product Developer",
      company: "PT Jasa Teknologi Informasi IBM",
      location: "Central Jakarta, Indonesia",
      employmentType: "Full-time",
      start: "2016-11",
      end: "2017-05",
      achievements: [
        "Worked on telecom-focused integration initiatives using XML and SOAP tooling.",
        "Supported delivery of enterprise-level product requirements.",
      ],
      technologies: ["SOAP UI", "XML", "Integration Testing"],
    },
    {
      role: "Application Developer",
      company: "PT Jasa Teknologi Informasi IBM",
      location: "Central Jakarta, Indonesia",
      employmentType: "Full-time",
      start: "2015-08",
      end: "2017-08",
      achievements: [
        "Developed and maintained back-office systems for HR, payroll, and training.",
        "Collaborated with stakeholders to improve operational workflows.",
      ],
      technologies: ["JavaScript", "SQL", "Enterprise Systems"],
    },
  ],

  education: [
    {
      degree: "Master of Management",
      institution: "Trisakti University",
      graduationYear: 2020,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Binus International University",
      graduationYear: 2015,
    },
  ],

  skills: [
    {
      category: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Responsive UI",
        "Accessibility",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "REST API Design", "Python"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "CI/CD",
        "Linux Server Management",
        "Nginx",
        "Infrastructure Automation",
      ],
    },
    {
      category: "Data",
      skills: ["SQL", "NoSQL", "Database Design", "Performance Optimization"],
    },
    {
      category: "Professional",
      skills: [
        "Project Ownership",
        "Remote Collaboration",
        "Problem Solving",
        "Creative & Critical Thinking",
      ],
    },
  ],

  highlights: [
    "10+ years of professional experience across software engineering roles.",
    "Balanced expertise in both product development and infrastructure operations.",
    "Track record of delivering practical, scalable solutions for distributed teams.",
  ],
};

export default profile;
