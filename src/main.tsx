import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "./Scss/index.scss";

const main = () => {
  ReactDOM.createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.addEventListener("DOMContentLoaded", main);
