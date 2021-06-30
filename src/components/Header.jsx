import React from "react";
import { Link } from "react-router-dom";
import "../style/components/header.css";
import home from "../images/home.svg";
import skills from "../images/skills.svg";
import project from "../images/project.svg";
import facebook from "../images/Facebook.svg";
import instagram from "../images/Instagram.svg";
import twitter from "../images/Twitter.svg";
import logo from "../images/wolf.svg";
import gitHub from "../images/GitHub.svg";

export function Header() {
  return (
    <header>
      <nav>
        <div className="nav-logos">
          <Link to="/">
            <img src={home} alt="Home" />
            <h3>Home</h3>
          </Link>
        </div>
        <div className="nav-logos">
          <Link to="/skills">
            <img src={skills} alt="Skills" />
            <h3>Skills</h3>
          </Link>
        </div>
        <div className="nav-logos">
          <Link to="projects">
            <img src={project} alt="Project" />
            <h3>Projects</h3>
          </Link>
        </div>
      </nav>
      <div className="name-logos">
        <h3>Marlon Varon</h3>
        <div className="logos-redes-sociales">
          <a href="https://www.facebook.com/marlon.varon.71/" target="_blank">
            <img src={facebook} alt="Logo-facebook" />
          </a>
          <a href="https://www.instagram.com/marlon.varon.dev/" target="_blank">
            <img src={instagram} alt="Logo-instagram" />
          </a>
          <a href="https://twitter.com/Marlon90947519" target="_blank">
            <img src={twitter} alt="Logo-twitter" />
          </a>
          <a href="https://github.com/marlon268" target="_blank">
            <img src={gitHub} alt="Logo-github" />
          </a>
        </div>
      </div>
      <div className="logo-pagina">
        <img src={logo} alt="" />
      </div>
    </header>
  );
}
