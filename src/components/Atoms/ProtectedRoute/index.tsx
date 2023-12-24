import React from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  // const { isAuth } = useContextSite();
  const [token] = useSessionStorage("@token");

  return token ? children : <Navigate to={"/login"} />;
};
