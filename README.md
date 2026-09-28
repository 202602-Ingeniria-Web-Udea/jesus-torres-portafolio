# Portafolio - Jesús Estiven Torres Quintero

Hoja de vida y portafolio personal desarrollado como **Proyecto evaluativo 1** del curso **Ingeniería Web (2554435)** de la Universidad de Antioquia, semestre 2026-2, con el docente Juan Pablo Arango.

**Sitio desplegado:** [https://jesus-torres-portafolio.vercel.app](https://jesus-torres.vercel.app/)

## Propósito

El objetivo del proyecto es aplicar el proceso de desarrollo frontend con Next.js, React y Tailwind CSS a partir del diseño base entregado en Figma, organizar los componentes con la metodología **Atomic Design** y desplegar el resultado en Vercel.

## Tecnologías

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Iconify](https://iconify.design/) (`@iconify/react`) para los íconos
- Fuente Inter de Google Fonts

## Secciones

- **Menú izquierdo fijo:** foto, nombre, títulos, datos de contacto, idiomas y lenguajes de programación con porcentaje de dominio y habilidades extra.
- **Contenido central con scroll vertical:**
  - **Perfil:** nombre, foto con fondo blanco, descripción y botón **Contrátame** que abre un diálogo de contacto.
  - **Conocimientos:** tarjetas con ícono, título y descripción.
  - **Educación:** tarjetas con institución, fechas, título y descripción.
  - **Portafolio:** tarjetas con imagen, título y descripción, con scroll horizontal y botón **Saber más** que abre un diálogo con el detalle del proyecto y sus enlaces.
  - **Footer.**
- **Menú derecho fijo:** cambio de tema, navegación por anclas y redes sociales (GitHub, LinkedIn, WhatsApp y correo).

## Funcionalidades adicionales

- Modo oscuro con la variante `dark` de Tailwind, guardado en el navegador para la próxima visita.
- Barra de progreso de lectura en la parte superior.
- Resaltado en el menú de la sección que se está viendo (`IntersectionObserver`).
- Aparición de las secciones al hacer scroll.
- Cifras destacadas en el perfil calculadas a partir de los datos.
- Cierre de los diálogos con la tecla Escape.
- Filtro de proyectos por categoría.
- Carrusel con botones para desplazar las tarjetas del portafolio.
- Animaciones: barras de porcentaje que crecen al cargar, aparición de secciones, efectos `hover` y entrada de los diálogos.
- Menú móvil tipo hamburguesa: en pantallas menores a `lg` los menús laterales se reemplazan por una barra superior.
- Botón para copiar el correo en el diálogo de contacto.

## Estructura del proyecto

```
app/
  globals.css        Paleta de colores (@theme), fuente y animaciones
  layout.tsx         Plantilla base con los menús fijos
  page.tsx           Página principal que ensambla los organismos
components/
  atoms/             Avatar, Button, IconLink, ProgressBar, Reveal, ScrollProgress, SectionTitle,
                     SidebarTitle, Tag, ThemeToggle
  molecules/         ContactList, EducationCard, FilterTabs, HireDialog, KnowledgeCard, Modal,
                     NavIcons, ProfileCard, ProgressList, ProjectCard, ProjectDetail, SkillList, SocialList
  organisms/         Education, Footer, Knowledge, LeftMenu, MobileNavbar, Portfolio, Profile, RightMenu
utils/
  data.ts            Información de la hoja de vida
  types.ts           Interfaces de TypeScript
public/
  perfil.jpg         Foto de perfil
  proyectos/         Imágenes de los proyectos
```

Cada componente vive en una carpeta con su propio `index.tsx`, y la información se mantiene separada en `utils/data.ts`, de modo que para agregar un proyecto, un estudio o un conocimiento solo se modifica ese archivo.

## Componentes reutilizados

| Componente | Nivel | Dónde se reutiliza |
|---|---|---|
| `Avatar` | Átomo | Menú izquierdo, perfil, barra móvil y diálogo de contacto |
| `Button` | Átomo | Perfil, tarjetas del portafolio, filtros y diálogo de contacto |
| `Tag` | Átomo | Perfil, educación, tarjetas y detalle de proyectos |
| `ProgressBar` | Átomo | Idiomas y lenguajes de programación |
| `SectionTitle` | Átomo | Conocimientos, educación y portafolio |
| `IconLink` | Átomo | Redes sociales en el menú derecho, menú móvil y footer |
| `ThemeToggle` | Átomo | Menú derecho y barra móvil |
| `Reveal` | Átomo | Secciones de conocimientos, educación y portafolio |
| `ProgressList` | Molécula | Idiomas y lenguajes de programación |
| `Modal` | Molécula | Diálogo de contacto y detalle de proyectos |
| `SocialList` | Molécula | Menú derecho, menú móvil y footer |
| `NavIcons` | Molécula | Menú derecho y menú móvil |
| `LeftMenu` | Organismo | Menú lateral de escritorio y panel del menú móvil |

## Cómo ejecutarlo

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

```bash
git clone https://github.com/202602-Ingeniria-Web-Udea/jesus-torres-portafolio.git
cd jesus-torres-portafolio
npm install
npm run dev
```

Luego se abre `http://localhost:3000` en el navegador.

Otros comandos:

```bash
npm run build   # compila la versión de producción
npm run start   # ejecuta la versión compilada
npm run lint    # revisa el código con ESLint
```

## Despliegue

El proyecto está desplegado en Vercel, conectado a la rama `main` de este repositorio. Cada nuevo commit en `main` genera un nuevo despliegue automáticamente.

## Autor

**Jesús Estiven Torres Quintero**
Estudiante de Ingeniería de Sistemas - Universidad de Antioquia
jesus.torresq@udea.edu.co
