import React from "react";
import "../style/components/error404.css";
import error404img from "../images/error404.jpg";

export function Error404() {
  return (
    <div className="content-error404">
      <img className="error404" src={error404img} alt="Error404" />
    </div>
  );
}
