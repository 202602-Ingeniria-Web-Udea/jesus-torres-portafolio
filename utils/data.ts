import {
  ContactItem,
  Education,
  Knowledge,
  NavLink,
  Project,
  ProjectCategory,
  Skill,
  SocialLink,
} from "@/utils/types";

const personalInfo = {
  name: "Jesús Estiven Torres Quintero",
  shortName: "Jesús Torres",
  titles: ["Estudiante de Ingeniería de Sistemas", "Ingeniero de Datos Jr."],
  photo: "/perfil.jpg",
  email: "jesus.torresq@udea.edu.co",
  whatsapp: "https://wa.me/573146629499",
  profile:
    "Soy estudiante de octavo semestre de Ingeniería de Sistemas en la Universidad de Antioquia y trabajo como ingeniero de datos junior. En mi día a día construyo y optimizo procesos de datos en Databricks y Delta Lake para clientes de distintos sectores, y en la universidad desarrollo aplicaciones web con Next.js, React y TypeScript. Me interesa unir el mundo de los datos con el desarrollo de software para crear soluciones útiles, bien probadas y fáciles de mantener.",
};

const contactInfo: ContactItem[] = [
  {
    icon: "mdi:map-marker-outline",
    label: "Ciudad",
    value: "Medellín, Colombia",
  },
  {
    icon: "mdi:email-outline",
    label: "Correo",
    value: "jesus.torresq@udea.edu.co",
    href: "mailto:jesus.torresq@udea.edu.co",
  },
  {
    icon: "mdi:phone-outline",
    label: "Celular",
    value: "+57 314 662 9499",
    href: "tel:+573146629499",
  },
  {
    icon: "mdi:school-outline",
    label: "Universidad",
    value: "Universidad de Antioquia",
  },
];

const languages: Skill[] = [
  { name: "Español", value: 100, icon: "mdi:translate" },
  { name: "Inglés", value: 50, icon: "mdi:translate" },
];

const programmingLanguages: Skill[] = [
  { name: "SQL", value: 85, icon: "mdi:database-search-outline" },
  { name: "Python", value: 80, icon: "mdi:language-python" },
  { name: "HTML y CSS", value: 80, icon: "mdi:language-html5" },
  { name: "JavaScript", value: 70, icon: "mdi:language-javascript" },
  { name: "TypeScript", value: 60, icon: "mdi:language-typescript" },
  { name: "Java", value: 60, icon: "mdi:language-java" },
  { name: "C#", value: 40, icon: "mdi:language-csharp" },
];

const extraSkills: string[] = [
  "Databricks y Delta Lake",
  "Power BI",
  "Git y Azure DevOps",
  "Pruebas automatizadas",
  "Trabajo en equipo",
  "Comunicación asertiva",
  "Aprendizaje autónomo",
  "Resolución de problemas",
];

const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "mdi:github", url: "https://github.com/JisusTQ" },
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    url: "https://www.linkedin.com/in/jesustorresq",
  },
  {
    name: "itch.io",
    icon: "simple-icons:itchdotio",
    url: "https://jisust.itch.io/",
  },
  {
    name: "WhatsApp",
    icon: "mdi:whatsapp",
    url: "https://wa.me/573146629499",
  },
  {
    name: "Correo",
    icon: "mdi:email-outline",
    url: "mailto:jesus.torresq@udea.edu.co",
  },
];

const navLinks: NavLink[] = [
  { title: "Perfil", icon: "mdi:home-outline", link: "#perfil" },
  {
    title: "Conocimientos",
    icon: "mdi:lightbulb-outline",
    link: "#conocimientos",
  },
  { title: "Educación", icon: "mdi:school-outline", link: "#educacion" },
  { title: "Portafolio", icon: "mdi:briefcase-outline", link: "#portafolio" },
];

const knowledge: Knowledge[] = [
  {
    icon: "mdi:database-cog-outline",
    title: "Ingeniería de datos",
    description:
      "Diseño y optimizo procesos en Databricks con PySpark y Delta Lake, con cargas incrementales, consumo de APIs y tablas listas para análisis.",
  },
  {
    icon: "mdi:web",
    title: "Desarrollo web",
    description:
      "Construyo interfaces con Next.js, React, TypeScript y Tailwind CSS, organizando los componentes con la metodología Atomic Design.",
  },
  {
    icon: "mdi:database-outline",
    title: "Bases de datos",
    description:
      "Modelo bases de datos relacionales y escribo consultas SQL. He trabajado con PostgreSQL, SQL Server y Prisma como ORM.",
  },
  {
    icon: "mdi:chart-box-outline",
    title: "Analítica y visualización",
    description:
      "Transformo datos en indicadores y tableros con Power BI. Formado en analítica de datos en el programa DS4A Colombia.",
  },
  {
    icon: "mdi:check-decagram-outline",
    title: "Calidad de software",
    description:
      "Automatizo pruebas con Serenity BDD y el patrón Screenplay, y analizo cobertura y complejidad del código con SonarCloud.",
  },
  {
    icon: "mdi:robot-outline",
    title: "Inteligencia artificial",
    description:
      "Integro modelos de lenguaje como Google Gemini en aplicaciones con FastAPI y entreno modelos de machine learning en Python.",
  },
];

const education: Education[] = [
  {
    institution: "Universidad de Antioquia",
    title: "Ingeniería de Sistemas",
    dates: "2023 - Actualidad",
    description:
      "Actualmente curso el octavo semestre. He trabajado en desarrollo web, bases de datos, arquitectura y calidad de software, y fui auxiliar de programación becario en la Sede de Investigaciones Universitarias.",
    type: "Formal",
  },
  {
    institution: "Smart4AI - Ruta N",
    title: "Bootcamp Fundamentos de Claude Aplicados",
    dates: "2026",
    description:
      "Bootcamp de 12 horas sobre el uso aplicado de Claude: prompts y proyectos, artefactos, skills, conectores, automatizaciones, agentes y Claude Code.",
    type: "Complementaria",
  },
  {
    institution: "Instituto Tecnológico Metropolitano (ITM)",
    title: "Ingeniería de Sistemas",
    dates: "2023",
    description:
      "Cursé un semestre del programa, con énfasis en fundamentos de programación y matemáticas, antes de continuar la carrera en la Universidad de Antioquia.",
    type: "Formal",
  },
  {
    institution: "Generation Colombia",
    title: "Bootcamp Desarrollador Junior de Unity",
    dates: "2023",
    description:
      "Bootcamp en alianza con Unity y el Bogotá Institute of Technology. Desarrollo de videojuegos con C#, físicas, animaciones y shaders. Mis juegos están publicados en itch.io.",
    type: "Complementaria",
  },
  {
    institution: "DS4A Colombia - Correlation One",
    title: "Fundamentos en Analítica de Datos",
    dates: "2022",
    description:
      "Programa de 90 horas del Ministerio TIC en analítica de datos, estadística y visualización. Graduado con honores.",
    type: "Complementaria",
  },
  {
    institution: "Universidad de Antioquia - Misión TIC 2022",
    title: "Habilidades de Programación con Profundización en Aplicaciones Web",
    dates: "2022",
    description:
      "Programa de 800 horas compuesto por los diplomados en Python, Java, Desarrollo de Software y Desarrollo de Aplicaciones Web.",
    type: "Complementaria",
  },
  {
    institution: "Universidad de Antioquia",
    title: "Ingeniería de Telecomunicaciones",
    dates: "2020 - 2022",
    description:
      "Primeros semestres de formación en ingeniería, con bases en matemáticas, física y programación, antes del cambio a Ingeniería de Sistemas.",
    type: "Formal",
  },
  {
    institution: "Politécnico Colombiano Jaime Isaza Cadavid",
    title: "Técnico Laboral en Programación de Sistemas Informáticos",
    dates: "2018 - 2019",
    description:
      "Técnica laboral por competencias con una intensidad de 1.184 horas, enfocada en lógica de programación, bases de datos y desarrollo de aplicaciones.",
    type: "Formal",
  },
  {
    institution: "Institución Educativa La Paz, Envigado",
    title: "Bachiller Académico",
    dates: "2019",
    description:
      "Educación media académica, cursada al mismo tiempo que la técnica laboral en programación.",
    type: "Formal",
  },
];

const projectCategories: ProjectCategory[] = [
  "Web",
  "Datos e IA",
  "Calidad",
  "Videojuegos",
];

const categoryIcons: Record<ProjectCategory, string> = {
  Web: "mdi:web",
  "Datos e IA": "mdi:brain",
  Calidad: "mdi:check-decagram-outline",
  Videojuegos: "mdi:gamepad-variant-outline",
};

const projects: Project[] = [
  {
    id: "planeai",
    title: "PlaneAI UdeA",
    image: "/proyectos/planeai.svg",
    category: "Datos e IA",
    summary:
      "Asesor académico con inteligencia artificial que ayuda a los estudiantes de la UdeA a planear su semestre.",
    details:
      "Aplicación que consulta en tiempo real los portales de la universidad para conocer materias, prerrequisitos y cupos, y usa Google Gemini con llamado de herramientas para recomendar un plan de matrícula. Se desarrolló en equipo y se sustentó en el curso Fundamentos de Sistemas de Información.",
    highlights: [
      "Backend en Python con FastAPI y esquemas tipados con Pydantic",
      "Agente con Google Gemini y llamado de herramientas",
      "Desplegado en Vercel y Render",
    ],
    technologies: ["Python", "FastAPI", "Pydantic", "Gemini"],
    links: [
      {
        label: "Ver aplicación",
        url: "https://planeai-udea-wkae-git-main-ana-granadas-projects.vercel.app/",
      },
    ],
  },
  {
    id: "saber-pro",
    title: "Predicción Saber Pro",
    image: "/proyectos/saber-pro.svg",
    category: "Datos e IA",
    summary:
      "Modelo de machine learning para predecir el desempeño en las pruebas Saber Pro en Colombia.",
    details:
      "Proyecto del curso de inteligencia artificial para ingeniería (AI4ENG) de la UdeA. Incluye la exploración del conjunto de datos, la limpieza, la ingeniería de variables y la comparación de modelos de clasificación, presentado en varias entregas con video.",
    highlights: [
      "Análisis exploratorio con Pandas",
      "Entrenamiento y evaluación de modelos con scikit-learn",
      "Trabajo en equipo de tres integrantes",
    ],
    technologies: ["Python", "Jupyter", "Pandas", "scikit-learn"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JisusTQ/UDEA-ai4eng-20251---Pruebas-Saber-Pro-Colombia",
      },
      {
        label: "Video de la entrega",
        url: "https://youtu.be/16r3F7AnfVo",
      },
    ],
  },
  {
    id: "pokedex",
    title: "Pokédex",
    image: "/proyectos/pokedex.svg",
    category: "Web",
    summary:
      "Aplicación con HTML, CSS y JavaScript puro que consume la PokéAPI.",
    details:
      "Taller evaluativo del curso Ingeniería Web. Permite buscar Pokémon por nombre o número, filtrarlos por tipo, ordenarlos y ver su detalle en un modal con estadísticas, habilidades y cadena de evolución.",
    highlights: [
      "Consumo de API con fetch y manejo de errores",
      "Favoritos guardados en el navegador",
      "Diseño responsivo sin frameworks",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PokéAPI"],
    links: [
      {
        label: "Ver aplicación",
        url: "https://202602-ingeniria-web-udea.github.io/taller-html-jesus-estiven-torres-quintero/",
      },
      {
        label: "Repositorio",
        url: "https://github.com/202602-Ingeniria-Web-Udea/taller-html-jesus-estiven-torres-quintero",
      },
    ],
  },
  {
    id: "colombian-league",
    title: "Colombian League Soccer",
    image: "/proyectos/colombian-league.svg",
    category: "Calidad",
    summary:
      "Aplicación en Java sobre la liga colombiana de fútbol, usada para análisis de calidad de código.",
    details:
      "Proyecto del curso de Calidad de Software en el que se midieron la cobertura de pruebas, la complejidad ciclomática y los problemas de mantenibilidad con SonarCloud, y se presentaron los resultados con datos reales del análisis.",
    highlights: [
      "Análisis estático con SonarCloud",
      "Pruebas unitarias en Java",
      "Métricas de cobertura y complejidad",
    ],
    technologies: ["Java", "JUnit", "SonarCloud"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JisusTQ/ColombianLeagueSoccer",
      },
    ],
  },
  {
    id: "laying-low",
    title: "Laying Low",
    image: "/proyectos/laying-low.svg",
    category: "Videojuegos",
    summary:
      "Videojuego desarrollado en Unity durante el bootcamp de Generation Colombia.",
    details:
      "Proyecto de videojuego construido en Unity con C#, en el que se trabajaron mecánicas de juego, físicas, escenas y efectos visuales mediante shaders escritos en ShaderLab.",
    highlights: [
      "Mecánicas programadas en C#",
      "Shaders personalizados con ShaderLab",
      "Proyecto final del bootcamp de Unity",
    ],
    technologies: ["Unity", "C#", "ShaderLab"],
    links: [
      { label: "Repositorio", url: "https://github.com/JisusTQ/LayingLow" },
      { label: "Portafolio en itch.io", url: "https://jisust.itch.io/" },
    ],
  },
  {
    id: "crud-react",
    title: "CRUD en React",
    image: "/proyectos/crud-react.svg",
    category: "Web",
    summary:
      "Aplicación sencilla para crear, listar, editar y eliminar registros con React.",
    details:
      "Uno de mis primeros proyectos con React, en el que practiqué el manejo de estado, los formularios controlados y la separación de la interfaz en componentes.",
    highlights: [
      "Manejo de estado con hooks",
      "Formularios controlados",
      "Componentes reutilizables",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    links: [
      {
        label: "Repositorio",
        url: "https://github.com/JisusTQ/crudSencilloReact",
      },
    ],
  },
];

export {
  personalInfo,
  contactInfo,
  languages,
  programmingLanguages,
  extraSkills,
  socialLinks,
  navLinks,
  knowledge,
  education,
  projectCategories,
  categoryIcons,
  projects,
};
