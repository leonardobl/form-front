import React from "react";
import * as S from "./styles";
import { removeUnderscore } from "../../../utils/removeUnderscore";

type StatusProps = {
  status: string;
  onClick?: () => void;
};

export const Status = ({ status }: StatusProps) => {
  return (
    <S.Container status={status}>
      <p>{removeUnderscore(status)}</p>
      {/* {onClick && status === "AGENDADO" && !isCliente && (
        <button onClick={handleClick}>INICIAR</button>
      )} */}
    </S.Container>
  );
};
