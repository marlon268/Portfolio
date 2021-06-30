import React from "react";
import "../style/components/project.css";
import logoProject from "../images/projet_amarillo.svg";
import RickAndMorty from "../images/RickAndMorty.PNG";

export function Projects() {
  return (
    <main className="projects">
      <div className="projects-logo">
        <img src={logoProject} alt="" />
        <h1>Projects</h1>
      </div>
      <section className="projects-container">
        <div className="projects-project">
          <a href="https://marlon268.github.io/RickAndMorty/" target="_blank">
            <p>Visitar en la web</p>
          </a>
          <img src={RickAndMorty} alt="" />
          <a href="https://github.com/marlon268/RickAndMorty" target="_blank">
            <p>Repositorio en GitHub</p>
          </a>
        </div>
      </section>
    </main>
  );
}
