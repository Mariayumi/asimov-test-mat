import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./home/page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <section className="main-layout">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </BrowserRouter>
  </React.StrictMode>,
);
