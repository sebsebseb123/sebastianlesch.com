import { useEffect } from "react";
import Link from "next/link";

export default function Nav({ className }) {
  // Add an event hangle to the menu-toggle button.
  // When clicked, toggle the class "is-active" on the nav element.
  // This will show/hide the menu.
  // useEffect(() => {
  //   const menuToggle = document.querySelector(".menu-toggle");
  //   const nav = document.querySelector("nav");

  //   menuToggle.addEventListener("click", () => {
  //     nav.classList.toggle("is-active");
  //   });
  // }, []);

  const onClickToggle = () => {
    document.querySelector("nav").classList.toggle("is-active");
  };
  const onClickRemove = () => {
    document.querySelector("nav").classList.remove("is-active");
  };

  return (
    <nav className={className}>
      <div className="nav-title">Sebastian Lesch /<span className="smaller">/ Full Stack Developer</span></div>
      <div onClick={onClickToggle} className="menu-toggle"></div>
      <ul>
        <li>
          <Link onClick={onClickRemove} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={onClickRemove} href="/projects">
            Projects
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