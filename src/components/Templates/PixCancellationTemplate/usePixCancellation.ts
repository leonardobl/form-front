import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

export const usePixCancellation = () => {
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const params = useParams();
  const isAdmGerente = agendamentoSession?.roles?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN || regra === RolesEnum.ROLE_GERENTE
  );

  function handleNavigate() {
    if (isAdmGerente) {
      navigate("/novo-agendamento");
      return;
    }
    navigate(`/agendamento`);
  }

  return { handleNavigate };
};
