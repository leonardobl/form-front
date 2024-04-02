import React from "react";
import * as S from "./styles";
import { removeUnderscore } from "../../../utils/removeUnderscore";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

type StatusProps = {
  status: string;
  onClick?: () => void;
};

export const Status = ({ status, onClick }: StatusProps) => {
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  const isCliente = !!agendamentoSession?.roles?.includes(
    RolesEnum.ROLE_CLIENTE
  );

  function handleClick() {
    onClick();
  }

  return (
    <S.Container status={status}>
      <p>{removeUnderscore(status)}</p>
      {onClick && status === "AGENDADO" && !isCliente && (
        <button onClick={handleClick}>INICIAR</button>
      )}
    </S.Container>
  );
};
