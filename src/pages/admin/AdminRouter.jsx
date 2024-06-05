import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Error from "@/pages/404";
import ChauffeurComponent from "@/pages/admin/chauffeur/index";
import ClientComponent from "@/pages/admin/client/index";
import DemandeComponent from "@/pages/admin/demande/index";
import OffreComponent from "@/pages/admin/offre/index";
import UserComponent from "@/pages/admin/user/index";
import DashboardA from "@/pages/admin/dashboard";
const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route index element={<DashboardA />} />
        <Route path="dashboard" element={<DashboardA />} />
        <Route path="chauffeurs" element={<ChauffeurComponent />} />
        <Route path="clients" element={<ClientComponent />} /> 
        <Route path="user" element={<UserComponent />} />
        <Route path="demandes" element={<DemandeComponent />} />
        <Route path="offres" element={<OffreComponent />} />
        

        <Route path="*" element={<Error />} />
      </Routes>
      
    </div>
  );
};

export default AdminRouter;
