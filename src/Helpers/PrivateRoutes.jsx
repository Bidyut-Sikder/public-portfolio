import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = localStorage.getItem("Token");

  return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
