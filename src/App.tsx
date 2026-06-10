import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { LiaSuitcaseSolid } from 'react-icons/lia'
import profilePhoto from './assets/foto de mi hermosura.jpg'
import instagram from './assets/projects/instagram.png'
import Diseños from './assets/projects/mi-pagina-web.png'
import JuegoPreguntasReact from './assets/projects/juego-preguntas-react.png' 
import frontendAppScreenshot from './assets/projects/frontend-app.png'
import gifsAppScreenshot from './assets/projects/gifs-app.png'
import chatbot from './assets/projects/chatbot-2-d.png'
import scaleupScreenshot from './assets/projects/scaleup.png'
import './App.css'

type IconName =
  | 'code'
  | 'external'
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'moon'
  | 'phone'
  | 'spark'
  | 'sun'
  | 'user'

type Project = {
  title: string
  summary: string
  repository: string
  preview?: string
  screenshot: string
  imageAlt: string
  tags: string[]
}

const email = 'bermeocastrojuandavid@gmail.com'
const githubUrl = 'https://github.com/JuanDavidBermeoCastro1234'
const linkedinUrl =
  'https://www.linkedin.com/in/juan-david-bermeo-castro-63a7b4326/?skipRedirect=true'
const phoneHref = 'tel:+573022926563'
const phoneLabel = '+57 302 292 6563'

const navItems = [
  { href: '#experiencia', label: 'Experiencia', shortLabel: 'Exp' },
  { href: '#proyectos', label: 'Proyectos', shortLabel: 'Proy' },
  { href: '#sobre-mi', label: 'Sobre mi', shortLabel: 'Perfil' },
  { href: '#contacto', label: 'Contacto', shortLabel: 'Email' },
]

const projects: Project[] = [
  {
    title: 'CRM y automatizacion ScaleUp',
    summary:
      'Sitio profesional para ScaleUp con enfoque en captacion, WhatsApp, CRM, agenda y automatizacion de procesos comerciales.',
    repository:
      'https://github.com/JuanDavidBermeoCastro1234/New-Project-Crm-and-Automatizaci-n',
    preview: 'https://www.scale-up-agencia.com',
    screenshot: scaleupScreenshot,
    imageAlt: 'Captura del sitio web de ScaleUp Marketing Agency',
    tags: ['HTML', 'Automatizacion', 'CRM', 'Vercel'],
  },
  {
    title: 'Gifs App',
    summary:
      'Aplicacion en TypeScript para buscar y explorar GIFs con una interfaz clara, rapida y preparada para consumo de APIs.',
    repository: 'https://github.com/JuanDavidBermeoCastro1234/gifs-app',
    preview: 'https://gifs-app-woad.vercel.app/',
    screenshot: gifsAppScreenshot,
    imageAlt: 'Captura de la aplicacion Gifs App',
    tags: ['TypeScript', 'React', 'API', 'Vercel'],
  },
  {
    title: 'TareasYa - Gestion de tareas',
    summary:
      'Tablero frontend para organizar tareas por estado, aplicar filtros y practicar interfaces de gestion publicadas en Vercel.',
    repository: 'https://github.com/JuanDavidBermeoCastro1234/frontend_AppWeb-',
    preview: 'https://frontend-app-web-nine.vercel.app',
    screenshot: frontendAppScreenshot,
    imageAlt: 'Captura del tablero de tareas TareasYa',
    tags: ['JavaScript', 'CSS', 'UI', 'Vercel'],
  },
  {
    title: 'Juego Preguntas React',
    summary:
      'Aplicación de trivia creada con Next.js y TypeScript que desafía a los usuarios con preguntas aleatorias, comodines estratégicos y seguimiento de resultados mediante almacenamiento local.',
    repository: 'https://github.com/JuanDavidBermeoCastro1234/JuegoPreguntasReact',
    preview: 'https://juego-preguntas-react-cx5p.vercel.app',
    screenshot: JuegoPreguntasReact, 
    imageAlt: 'Captura del juego',
    tags: ['nextjs', 'react', 'typescript', 'javascript'],
  },
  {
    title: 'Chatbot n8n',
    summary:
      'Sistema de creación y gestión de chatbots con IA para WhatsApp, integrado con n8n, OpenAI y Evolution API para automatizar ventas, soporte y atención al cliente.',
    repository:
      'https://github.com/JuanDavidBermeoCastro1234/chatbot-2-d',
    screenshot: chatbot,
    imageAlt: 'Captura del repo del chatbot ',
    tags: ['chatbot', 'openai', 'n8n', 'javascript','evolution-api'],
  },
  {
    title: 'instagram',
    summary:
      'Clon visual de la página principal de Instagram desarrollado con HTML y CSS, diseñado para replicar fielmente la interfaz, el diseño responsive y la experiencia visual de la plataforma en dispositivos móviles y de escritorio.',
    repository:
      'https://github.com/JuanDavidBermeoCastro1234/instagram',
    preview:
      'https://juandavidbermeocastro1234.github.io/instagram',
    screenshot: instagram,
    imageAlt: 'Captura de la pantalla principal de instagram',
    tags: ['CSS', 'Accesibilidad', 'UI'],
  },
    {
    title: 'Diseño de 50 paginas web',
    summary:
      'Colección de más de 50 diseños modernos de Landing Pages creadidos en Figma. Incluye plantillas editables y personalizables para startups, SaaS, negocios, e-commerce y proyectos digitales, listas para inspirar, prototipar o acelerar el desarrollo web.',
    repository:
      'https://github.com/JuanDavidBermeoCastro1234/mi-pagina-web',
    preview:
      'https://mi-pagina-web-ecru.vercel.app',
    screenshot: Diseños,
    imageAlt: 'Captura de los diseños',
    tags: ['CSS', 'figma', 'UI','github','version-control','git'],
  },
]

const experience = [
  {
    role: 'Desarrollador Full Stack - Practicas laborales',
    place: 'Globant',
    time: '12 meses',
    detail:
      'Participe en practicas laborales como desarrollador full stack, trabajando en un proyecto con Java, Spring Boot y React. Tambien fortaleci conocimientos en diseno web para paginas web, bases de datos y arquitectura web dentro de la empresa.',
  },
  {
    role: 'Tecnico laboral en desarrollo de software Full Stack',
    place: 'Campuslands',
    time: 'Graduado',
    detail:
      'Formacion intensiva en desarrollo web, fundamentos de programacion, frontend, backend, bases de datos y construccion de proyectos reales.',
  },
  {
    role: 'Desarrollador de proyectos web',
    place: 'Portafolio personal y despliegues',
    time: '2025 - Actualidad',
    detail:
      'Construccion de aplicaciones con React, TypeScript, JavaScript, HTML y CSS, publicadas en Vercel y GitHub Pages para validar producto, interfaz y responsive design.',
  },
  {
    role: 'Practica backend, datos y automatizacion',
    place: 'APIs, MongoDB y flujos CRM',
    time: '2024 - Actualidad',
    detail:
      'Trabajo con endpoints, CRUD, modelado NoSQL, MongoDB y automatizaciones orientadas a procesos de negocio y seguimiento de clientes.',
  },
]

const skills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Java',
  'Spring Boot',
  'HTML',
  'CSS',
  'Python',
  'MongoDB',
  'Bases de datos',
  'Arquitectura web',
  'Node.js',
  'Git',
  'Vercel',
  'APIs REST',
  'Responsive UI',
]

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    code: (
      <>
        <path d="m9 18-6-6 6-6" />
        <path d="m15 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M14 5h7v7" />
        <path d="M21 5 10 16" />
        <path d="M19 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
    github: (
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.1-3.4-1.1-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.2-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7.8 8c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.8-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.6A4.8 4.8 0 0 1 16 8Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    mail: (
      <>
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        <path d="m22 8-10 7L2 8" />
      </>
    ),
    moon: <path d="M21 13.5A8.5 8.5 0 0 1 11.5 3 7 7 0 1 0 21 13.5Z" />,
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
        <path d="M14 2a8 8 0 0 1 8 8" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3l1.3 4.2L17.5 9l-4.2 1.8L12 15l-1.3-4.2L6.5 9l4.2-1.8L12 3Z" />
        <path d="M19 14l.6 2 1.9.9-1.9.8-.6 2-.6-2-1.9-.8 1.9-.9.6-2Z" />
        <path d="M5 14l.5 1.5L7 16l-1.5.5L5 18l-.5-1.5L3 16l1.5-.5L5 14Z" />
      </>
    ),
    sun: (
      <>
        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </>
    ),
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

function ProjectPreview({ project }: { project: Project }) {
  const previewLabel = project.preview
    ?.replace('https://', '')
    .replace('http://', '')
    .replace(/\/$/, '')

  return (
    <div className="project-preview">
      <div className="browser-bar">
        <div className="browser-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p>{previewLabel ?? project.title}</p>
      </div>
      <img
        className="project-screenshot"
        src={project.screenshot}
        alt={project.imageAlt}
        loading="lazy"
      />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand-link" href="#inicio" aria-label="Ir al inicio">
          JB
        </a>
        <nav aria-label="Secciones principales">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} data-short={item.shortLabel}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-button"
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          title={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
        >
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
        </button>
      </header>

      <main>
        <section className="hero section" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="identity-row">
              <img
                className="profile-photo"
                src={profilePhoto}
                alt="Juan David Bermeo Castro"
              />
              <a className="status-badge" href={`mailto:${email}`}>
                <Icon name="spark" />
                Abierto a oportunidades
              </a>
            </div>

            <p className="eyebrow">Full Stack Developer | Colombia</p>
            <h1 id="hero-title">
              Hey, soy <span>Juan David</span>
            </h1>
            <p className="hero-description">
              Tecnico laboral en desarrollo de software full stack graduado de
              Campuslands. Construyo aplicaciones web con React, TypeScript,
              JavaScript y CSS, conectando interfaces limpias con APIs, bases
              de datos y automatizaciones utiles para negocio.
            </p>

            <div className="hero-actions" aria-label="Acciones principales">
              <a className="button button-primary" href={`mailto:${email}`}>
                <Icon name="mail" />
                Contactame
              </a>
              <a className="button" href={githubUrl} target="_blank" rel="noreferrer">
                <Icon name="github" />
                GitHub
              </a>
              <a className="button" href={linkedinUrl} target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Resumen profesional">
            <div className="metric-row">
              <span>52</span>
              <p>repositorios publicos en GitHub</p>
            </div>
            <div className="metric-row">
              <span>8+</span>
              <p>proyectos con demo publica</p>
            </div>
            <div className="metric-row">
              <span>Full</span>
              <p>frontend, backend, datos y automatizacion</p>
            </div>
          </aside>
        </section>

        <section className="section" id="experiencia" aria-labelledby="experience-title">
          <div className="section-title">
            <LiaSuitcaseSolid className="icon suitcase-icon" aria-hidden="true" />
            <h2 id="experience-title">Experiencia</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.place}`}>
                <div className="timeline-meta">
                  <h3>{item.role}</h3>
                  <p>{item.place}</p>
                  <span>{item.time}</span>
                </div>
                <p className="timeline-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="proyectos" aria-labelledby="projects-title">
          <div className="section-title">
            <Icon name="code" />
            <h2 id="projects-title">Proyectos</h2>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <ProjectPreview project={project} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="tag-list" aria-label={`Tecnologias de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{project.summary}</p>
                  <div className="project-actions">
                    <a
                      className="button"
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="github" />
                      Code
                    </a>
                    {project.preview && (
                      <a
                        className="button"
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="external" />
                        Preview
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre-mi" aria-labelledby="about-title">
          <div className="about-copy">
            <div className="section-title">
              <Icon name="user" />
              <h2 id="about-title">Sobre mi</h2>
            </div>
            <p>
              Me enfoco en crear productos web claros, mantenibles y utiles. Mi
              formacion en Campuslands me dio base full stack, y mis proyectos
              reflejan practica constante en interfaces, consumo de datos,
              CRUD, MongoDB, despliegues y automatizacion de procesos.
            </p>
            <p>
              Me interesa trabajar en equipos donde pueda aportar en frontend
              con React y TypeScript, pero tambien entender la logica del
              backend, los datos y la experiencia completa del usuario.
            </p>
          </div>

          <div className="skills-panel">
            <h3>Tecnologias y herramientas</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
          <div>
            <div className="section-title">
              <Icon name="mail" />
              <h2 id="contact-title">Contacto</h2>
            </div>
            <p>
              Si buscas un desarrollador junior full stack con foco en frontend,
              buenas bases de programacion y ganas de construir productos reales,
              puedes escribirme directamente.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              <Icon name="mail" />
              {email}
            </a>
            <a className="button" href={phoneHref}>
              <Icon name="phone" />
              {phoneLabel}
            </a>
            <a className="button" href={linkedinUrl} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              LinkedIn
            </a>
            <a className="button" href={githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" />
              JuanDavidBermeoCastro1234
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>(c) 2026 Juan David Bermeo Castro. Hecho con React y CSS.</p>
      </footer>
    </div>
  )
}

export default App
