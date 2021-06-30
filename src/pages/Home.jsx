import React from "react";
import "../style/components/home.css";
import phoneLogo from "../images/TechLifeBlockchain.png";

export function Home() {
  return (
    <>
      <main className="home">
        <div className="main">
          <h1 className="main-title">Frontend Developer</h1>
        </div>
        <div></div>
        <footer>
          <img src={phoneLogo} alt="" />
        </footer>
      </main>
    </>
  );
}
