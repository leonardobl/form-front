import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

export const usePixCancellation = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] =
    useSessionStorage("cliente");
  const params = useParams();
  const isAdmGerente = usuario?.roles?.some(
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
