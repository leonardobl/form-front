import React, { useEffect } from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const ProtectedClientRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  // const { isAuth } = useContextSite();
  const [cliente] = useSessionStorage("cliente");

  function handleRedirect() {
    toast.info(
      "Você precisa ter um perfil de cliente para realizar essa ação!",
      { autoClose: 4000 }
    );
  }

  useEffect(() => {
    if (!cliente?.role) return;
    !cliente?.role?.includes(RolesEnum.ROLE_CLIENTE) && handleRedirect();
  }, [cliente]);

  return cliente?.role?.includes(RolesEnum.ROLE_CLIENTE) ? (
    children
  ) : (
    <Navigate to={"/agendamento"} />
  );
};
