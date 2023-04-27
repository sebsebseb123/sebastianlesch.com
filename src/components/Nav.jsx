import { useEffect } from "react";
import Link from "next/link";

export default function Nav({ className }) {
  const onClickToggle = () => {
    document.querySelector("nav").classList.toggle("is-active");
  };
  const onClickRemove = () => {
    document.querySelector("nav").classList.remove("is-active");
  };

  return (
    <nav className={className}>
      <div className="nav-title"><Link onClick={onClickRemove} href="/">Sebastian Lesch /<span className="smaller">/ Full Stack Developer</span></Link></div>
      <div onClick={onClickToggle} className="menu-toggle"></div>
      <ul>
        <li>
          <Link onClick={onClickRemove} href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={onClickRemove} href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link onClick={onClickRemove} href="/#contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}