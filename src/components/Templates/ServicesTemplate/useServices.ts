import React from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useParams } from "react-router-dom";

export const useServices = () => {
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const params = useParams();

  return { params, agendamentoSession, setAgendamentoSession };
};
