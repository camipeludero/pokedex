import React from "react";
import { Navigate } from "react-router-dom";

const RedirectRoute = ({ children, condition, redirectRoute }) => {
  if (condition) {
    return children;
  } else {
    return <Navigate to={redirectRoute} />;
  }
};

export default RedirectRoute;
