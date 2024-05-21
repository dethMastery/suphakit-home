/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import HomePage from "./Pages/Home";

import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  ),
  root!
);
