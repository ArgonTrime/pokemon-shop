import React from "react";
import ReactDOM from "react-dom/client";

import MainView from "components/MainView";
import Router from "routes/Router";

import "./index.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <MainView>
        <Router />
      </MainView>
    </HashRouter>
  </React.StrictMode>
);
