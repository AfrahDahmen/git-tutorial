import React from "react";
import { Routes, Route } from "react-router-dom";
import Error from "@/pages/404";
import Gestion from "@/pages/gestionProfile/gestion";

const GestionRouter = () => {
  return (
    <Routes>
      <Route path="gestion" element={<Gestion />} /> {/* Correction ici */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default GestionRouter;
