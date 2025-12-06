// Datos del portafolio - Alejandro Isaac Vazquez Lopez

export const personalInfo = {
  name: "Alejandro Isaac Vazquez Lopez",
  title: "Ingeniero en Sistemas Computacionales",
  subtitle: "Desarrollador de Software | Python | JavaScript | Flutter",
  bio: "Apasionado por el desarrollo de software, el aprendizaje continuo y la creación de soluciones prácticas. Especializado en desarrollo backend con Python y aplicaciones multiplataforma.",
  email: "alejandroisaacvazquezlopez@gmail.com",
  github: "https://github.com/alejandrovazquezdev",
  linkedin: "https://www.linkedin.com/in/alejandro-vazquez-dev",
  avatar: "https://avatars.githubusercontent.com/u/217298947?v=4",
  location: "México",
  followers: 2,
  following: 3,
  publicRepos: 16
};

export const skills = {
  languages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Lua", level: 75, icon: "🌙" },
    { name: "Dart/Flutter", level: 80, icon: "📱" }
  ],
  frameworks: [
    { name: "Flask", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Flutter", category: "Mobile" },
    { name: "Node.js", category: "Backend" }
  ],
  databases: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebird", icon: "🔥" },
    { name: "SQLite", icon: "💾" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
    { name: "VS Code", icon: "💻" }
  ]
};

export const featuredProjects = [
  {
    id: 1,
    name: "firebird-postgresql-join",
    description: "Herramienta para realizar JOINs entre bases de datos Firebird y PostgreSQL",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/firebird-postgresql-join",
    topics: ["database", "python", "firebird", "postgresql"],
    featured: true,
    updatedAt: "2025-11-28"
  },
  {
    id: 2,
    name: "Dreamhack",
    description: "Proyecto de análisis y procesamiento de datos con Python",
    language: "Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/Dreamhack",
    topics: ["python", "data-analysis"],
    featured: true,
    updatedAt: "2025-11-11"
  },
  {
    id: 3,
    name: "dotfiles-anywhere",
    description: "Gestión de configuraciones (dotfiles) para Debian, macOS y Windows",
    language: "Lua",
    stars: 0,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/dotfiles-anywhere",
    topics: ["dotfiles", "lua", "configuration", "cross-platform"],
    featured: true,
    updatedAt: "2025-12-03"
  },
  {
    id: 4,
    name: "isaac-flask-tutorial",
    description: "Tutorial Flask - Miniblog",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/isaac-flask-tutorial",
    topics: ["flask", "python", "tutorial", "web-development"],
    featured: true,
    updatedAt: "2025-10-10"
  },
  {
    id: 5,
    name: "OPtutorial",
    description: "Tutorial de Open Payments - Configuración de cliente Node.js para la API de Open Payments",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/OPtutorial",
    topics: ["nodejs", "open-payments", "api", "tutorial"],
    featured: true,
    updatedAt: "2025-11-03"
  },
  {
    id: 6,
    name: "CuotaFlow",
    description: "Sistema de gestión de cuotas y pagos",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/alejandrovazquezdev/CuotaFlow",
    topics: ["python", "management-system"],
    featured: false,
    updatedAt: "2025-11-30"
  }
];

export const education = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Universidad",
    year: "2025",
    description: "Especialización en desarrollo de software y bases de datos"
  }
];

export const experience = [
  {
    title: "Desarrollador de Software",
    company: "Freelance",
    period: "2024 - Presente",
    description: "Desarrollo de soluciones personalizadas con Python, Flask y bases de datos relacionales. Integración de sistemas heterogéneos."
  }
];
