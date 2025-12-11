import './Curriculum.css';
import cv from '../data/cv'

export default function Curriculum() {
  return (
    <div className="Curriculum">
      <h1>Experience:</h1>
      {cv.experience.map(experience =>
        <Experience experience={experience} />
      )}
      <h1>Skills:</h1>
      {cv.skills.map(skill =>
        <Skills skill={skill} />
      )}
    </div>
  );
}

function Experience(data) {
  const ex = data.experience;
  return (
    <div className='Experience'>
      <h2>
        <span className='date'>{ex.start} - {ex.end ?? "Present"}:</span>
        <span className='name'> {ex.name},</span>
        <span className="location"> {ex.location}</span>
      </h2>
      <h3 className='title'> {ex.title} </h3>
      <ul>
        {ex.bulletPoints?.map(bp => (
          <li>{bp}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills(data) {
  const sk = data.skill
  return (
    <p className='Skill'>
      <span className='SkillCategory'>{sk.name}: </span>
      {
        sk.values.map((x, i) => [
          i > 0 && ", ",
          <span>{x}</span>
        ])
      }
    </p>
  )
}
