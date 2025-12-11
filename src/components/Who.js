import { Link } from 'react-router-dom'

export default function Who() {
  return (
    <div>
      <h1>Who I am</h1>
      <p>
        Software engineer specializing in backend systems, Linux, and scalable services.
        Polyglot developer working across C, C#, Go, JavaScript, and Python.
      </p>
      <p>
        I approach problems from the ground up—hardware architecture, assembly, and system internals—to see the bigger picture.
        This perspective drives my open-source <Link to="/projects">projects</Link>, turning low-level insights into useful tools.
      </p>
    </div>
  );
}
