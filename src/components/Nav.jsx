import Bounce from './Bounce'

export default function Nav({ className }) {
  return (
    <nav className={className}>
      <div className="nav-title"><Bounce>Sebastian&nbsp;Lesch&nbsp;/</Bounce><Bounce className="smaller">/&nbsp;Full&nbsp;Stack&nbsp;Developer</Bounce></div>
      <ul>
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}