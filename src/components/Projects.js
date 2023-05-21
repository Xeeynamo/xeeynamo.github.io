import './Projects.css'
import projects from '../data/prjs'

export default function Projects() {
  return (
    <div className="ProjectsOld">
      <h1>Projects</h1>
      <p>
        The listed projects are the effort of 15 years of work non-profit and offered for free to everyone. This is only possible by supporting me, the author, on <a href="https://github.com/sponsors/Xeeynamo">my GitHub account</a> through monthly donations of your choice. GitHub Sponsors gives 100% of the funds. I will never support platforms such Patreon, which holds 12% of the donations.
      </p>
      {projects.map(x => (
        <div className='Project'>
          <h2>{x.name}</h2>
          {x.links?.length === 0 ? "" :
            <h3>{
              x.links.map(l => (
                <a href={l.url}>{l.name}</a>
              ))
            }</h3>}
          <p dangerouslySetInnerHTML={{ __html: x.description }} />
        </div>
      ))}
    </div>
  )
}
