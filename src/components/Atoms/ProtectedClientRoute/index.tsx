import React, { useEffect } from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

export const ProtectedClientRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [token] = useSessionStorage("@token");
  const { agendamentoContext } = useContextSite();

  function handleRedirect() {
    toast.info(
      "Você precisa ter um perfil de cliente para realizar essa ação!",
      { autoClose: 4000 }
    );
  }

  useEffect(() => {
    if (!agendamentoContext?.roles?.length) return;
    !agendamentoContext?.roles?.includes(RolesEnum.ROLE_CLIENTE) &&
      handleRedirect();
  }, [agendamentoContext]);

  return !token ? (
    children
  ) : agendamentoContext?.roles?.includes(RolesEnum.ROLE_CLIENTE) ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};
