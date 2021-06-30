import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Header } from "../components/Header";
import { Error404 } from "../pages/Error404";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
