import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from 'react-feather';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import "./index.css";

import AppRouter from "./AppRouter";

// New Router
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
