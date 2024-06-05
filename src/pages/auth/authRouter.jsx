import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error from "@/pages/404";
import Login from "@/pages/auth/login";
const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
      
    </Routes>
  );
};

export default AuthRouter;
