import React from "react";
import "../style/components/skills.css";
import htmlLogo from "../images/html.svg";
import cssLogo from "../images/css.svg";
import logoSkills from "../images/skills_amarillo.svg";
import javaScriptLogo from "../images/JS.svg";
import reactLogo from "../images/logos_react.svg";
import webPack from "../images/webpack.svg";
import NPM from "../images/npm.svg";
import gitHub from "../images/githublogo.svg";

export function Skills() {
  return (
    <main className="skills">
      <div className="logo-tecnology">
        <img src={logoSkills} alt="" />
        <h1>Skills</h1>
      </div>
      <div className="skills-content-logos">
        <div className="logo-tecnology">
          <img src={htmlLogo} alt="" />
          <h3>HTML</h3>
        </div>
        <div className="logo-tecnology">
          <img src={cssLogo} alt="" />
          <h3>CSS</h3>
        </div>
        <div className="logo-tecnology">
          <img src={javaScriptLogo} alt="" />
          <h3>JavaScript</h3>
        </div>
        <div className="logo-tecnology">
          <img src={reactLogo} alt="" />
          <h3>React</h3>
        </div>
        <div className="logo-tecnology">
          <img src={webPack} alt="" />
          <h3>Webpack</h3>
        </div>
        <div className="logo-tecnology">
          <img src={NPM} alt="" />
          <h3>NPM</h3>
        </div>
        <div className="logo-tecnology">
          <img src={gitHub} alt="" />
          <h3>GitHub</h3>
        </div>
      </div>
    </main>
  );
}
