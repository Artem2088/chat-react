import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.auth ? <Component {...props} /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
