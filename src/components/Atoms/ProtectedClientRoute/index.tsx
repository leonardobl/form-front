import React, { useEffect } from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";
import { toast } from "react-toastify";

export const ProtectedClientRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [agendamentoSession] = useSessionStorage("agendamentoSession");

  const [token] = useSessionStorage("@token");

  function handleRedirect() {
    toast.info(
      "Você precisa ter um perfil de cliente para realizar essa ação!",
      { autoClose: 4000 }
    );
  }

  useEffect(() => {
    if (!agendamentoSession?.roles) return;
    !agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE) &&
      handleRedirect();
  }, [agendamentoSession?.uuidCliente]);

  return !token ? (
    children
  ) : agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE) ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};
