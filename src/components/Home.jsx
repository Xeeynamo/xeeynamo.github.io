import './Home.css'
import cv from '../data/cv'
import projects from '../data/prjs'

export default function Home() {
  return (
    <div className="Home">
      <article id="about">
        <h1>🌟 About 🌟</h1>
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
        <h1>💼 Work Experience 💼</h1>
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
        <h1>🚀 Cool Projects 🚀</h1>
        <p className="Projects-intro">
          ⭐ 15 YEARS of FREE SOFTWARE! ⭐ Support via <a href="https://github.com/sponsors/Xeeynamo">GitHub Sponsors</a> ⭐
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

      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: 'linear-gradient(45deg, #FFD700, #FFA500)',
        border: '5px ridge #FF0000',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#000000',
          textShadow: '2px 2px 0px #FFFF00',
          marginBottom: '10px'
        }}>
          🚧 ALWAYS UNDER CONSTRUCTION 🚧
        </div>
        <div style={{
          fontSize: '14px',
          color: '#FF0000',
          fontWeight: 'bold'
        }}>
          This site is a living document - constantly evolving!
        </div>
      </div>
    </div>
  )
}
