import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import classes from "./assets/css/app.module.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import imgLogoLM from "./assets/img/imgLogoLmTrBLCK.svg";
import Navbar from "./components/elements/Navbar";

function App() {
  const [loadingClass, setLoadingClass] = useState("animate__fadeInUp");
  const [wraperClass, setWraperClass] = useState(""); // adăugați această linie pentru a gestiona clasa wraper
  const [applicationClass, setApplicationClass] = useState("d-none");
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoadingClass("animate__fadeOutDown");
      setWraperClass("animate__fadeOutUp");
      setApplicationClass("d-block");
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <>
      <div
        className={`${classes.WrapEntryPage} animate__animated ${wraperClass}`}
      >
        <img
          src={imgLogoLM}
          alt=""
          className={`${classes.imgLogoEntryPage} ${loadingClass}`}
        />
        <div className={`${classes.spinner} animate__animated ${loadingClass}`}>
          <div className={`${classes.spinner1}`}></div>
        </div>
      </div>
      <div className={`${classes.application} ${applicationClass}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
