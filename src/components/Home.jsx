import './Home.css'
import cv from '../data/cv'
import projects from '../data/prjs'

export default function Home() {
  return (
    <div className="Home">
      <article id="about">
        <h1>🕷 About 🕷</h1>
        <p>
          Software engineer specializing in backend systems, Linux, and scalable services.
          Polyglot developer working across C, C#, Go, JavaScript, and Python.
        </p>
        <p>
          I approach problems from the ground up—hardware architecture, assembly, and system internals—to see the bigger picture.
          This perspective drives my open-source <a href="#projects">projects</a>, turning low-level insights into useful tools.
        </p>
      </article>

      <article id="work">
        <h1>🕸 Work Experience 🕸</h1>
        {cv.experience.map(exp => (
          <section className="Experience" key={exp.name}>
            <h2>
              <span className="date">{exp.start} - {exp.end ?? "Present"}:</span>
              <span className="name"> {exp.name},</span>
              <span className="location"> {exp.location}</span>
            </h2>
            <h3 className="title">{exp.title}</h3>
            <ul>
              {exp.bulletPoints?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </article>

      <article id="projects">
        <h1>🎃 Haunted Projects 🎃</h1>
        <p className="Projects-intro">
          💀 15 years of non-profit work, free for everyone 💀 Support via <a href="https://github.com/sponsors/Xeeynamo">GitHub Sponsors</a>
        </p>
        {projects.map(project => (
          <section className="Project" key={project.id}>
            <h2>{project.name}</h2>
            {project.links?.length > 0 && (
              <div className="Project-links">
                {project.links.map(link => (
                  <a key={link.url} href={link.url} className="Project-link">{link.name}</a>
                ))}
              </div>
            )}
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </section>
        ))}
      </article>
    </div>
  )
}
