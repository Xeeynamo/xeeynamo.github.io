import './Curriculum.css';
import cv from '../data/cv'

export default function Curriculum() {
  return (
    <div className="Curriculum">
      <h1>Experience:</h1>
      {cv.experience.map(exp => (
        <Experience key={exp.name} experience={exp} />
      ))}
      <h1>Skills:</h1>
      {cv.skills.map(skill => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function Experience({ experience }) {
  return (
    <div className='Experience'>
      <h2>
        <span className='date'>{experience.start} - {experience.end ?? "Present"}:</span>
        <span className='name'> {experience.name},</span>
        <span className="location"> {experience.location}</span>
      </h2>
      <h3 className='title'>{experience.title}</h3>
      <ul>
        {experience.bulletPoints?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <p className='Skill'>
      <span className='SkillCategory'>{skill.name}: </span>
      {skill.values.join(', ')}
    </p>
  )
}
