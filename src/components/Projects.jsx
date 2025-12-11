import './Projects.css'
import projects from '../data/prjs'

export default function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <p className="Projects-intro">
        15 years of non-profit work, free for everyone. Support via <a href="https://github.com/sponsors/Xeeynamo">GitHub Sponsors</a>.
      </p>
      {projects.map(project => (
        <div className="Project" key={project.id}>
          <h2>{project.name}</h2>
          {project.links?.length > 0 && (
            <div className="Project-links">
              {project.links.map(link => (
                <a key={link.url} href={link.url} className="Project-link">{link.name}</a>
              ))}
            </div>
          )}
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      ))}
    </div>
  )
}
