import React from "react";
import * as S from "./styles";
import { useOptionsSchedules } from "./useOptionsSchedules";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

type OptionsSchedulesProps = {
  status: StatusAgendamentoEnum;
  handleStart: () => void;
  handleSleep: () => void;
};

export const OptionsSchedules = ({
  status,
  handleStart,
  handleSleep,
}: OptionsSchedulesProps) => {
  const { isCliente, isOpen, setIsOpen } = useOptionsSchedules();

  return (
    <S.Container>
      <img
        src="/assets/svgs/dots.svg"
        alt="dots"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <S.Menu data-open={isOpen}>
        {status === "AGENDADO" && !isCliente && (
          <div>
            <button onClick={handleStart}>Iniciar</button>
          </div>
        )}
        <div>
          <button>Atribuir</button>
        </div>
      </S.Menu>
    </S.Container>
  );
};
