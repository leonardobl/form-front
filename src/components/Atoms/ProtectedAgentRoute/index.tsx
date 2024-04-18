import React from "react";

import { Navigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { TipoClienteEnum } from "../../../enums/tipoCliente";

export const ProtectedAgentRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [agendamentoSession] = useSessionStorage("agendamentoSession");

  return ![
    TipoClienteEnum.CONCESSIONARIA,
    TipoClienteEnum.DESPACHANTE,
  ].includes(agendamentoSession?.tipo) ? (
    children
  ) : (
    <Navigate to={"/agendamento/agente"} />
  );
};
