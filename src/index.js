import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import "swiper/css/bundle";

import "./index.scss";
ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
