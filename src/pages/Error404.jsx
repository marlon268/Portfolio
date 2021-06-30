import React from "react";
import "../style/components/error404.css";
import error404 from "../images/error404.jpg";

export function Error404() {
  return (
    <div className="content-error404">
      <img className="error404" src={error404} alt="Error404" />
    </div>
  );
}
