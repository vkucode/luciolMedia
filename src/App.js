import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
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
