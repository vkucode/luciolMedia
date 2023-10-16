import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
