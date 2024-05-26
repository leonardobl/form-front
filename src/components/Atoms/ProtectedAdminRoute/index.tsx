import React from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

export const ProtectedAdminRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [usuario] = useSessionStorage("cliente");

  return !usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE) ? (
    children
  ) : (
    <Navigate to={"/agendamento"} />
  );
};
