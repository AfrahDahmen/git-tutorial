import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ALayout from "./layout/ALayout";
import AuthRouter from "@/pages/auth/authRouter";
import AdminRouter from "./pages/admin/AdminRouter";
import Error from "@/pages/404";
import Login from "@/pages/auth/login";
import GestionRouter from "@/pages/gestionProfile/GestionRouter"; // Assurez-vous que le chemin est correct
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="App relative">
      <Routes>
        <Route index element={<Login />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/admin/*" element={<ALayout />}>
          <Route path="*" element={<AdminRouter />} />
        </Route>
        <Route path="/gestionProfile/*" element={<GestionRouter />} /> {/* Correction ici */}
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
