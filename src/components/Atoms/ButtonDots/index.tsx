import React, { ComponentProps, useState } from "react";
import * as S from "./styles";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { CustomConfirmModal } from "../CustomConfirmModal";
import { Text } from "../Text";
import { Button } from "../Button";

interface IButtonDotsProps extends ComponentProps<"div"> {
  handleStart: () => void;
  handleWait?: () => void;
  statusAgendamento: StatusAgendamentoEnum;
}

export const ButtonDots = ({
  handleStart,
  handleWait,
  statusAgendamento,
}: IButtonDotsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <S.MyMenu onClick={() => setIsOpen((prev) => !prev)}>
      <img src="/assets/svgs/dots.svg" alt="dots" />
      <S.WrapperButtons data-active={isOpen}>
        {statusAgendamento !== StatusAgendamentoEnum.INICIADO && (
          <div>
            <button
              onClick={() => {
                handleStart();
                setIsOpen(false);
              }}
            >
              Iniciar
            </button>
          </div>
        )}
        {handleWait && statusAgendamento !== StatusAgendamentoEnum.INICIADO && (
          <div>
            <button
              onClick={() => {
                setModal(true);
                setIsOpen(false);
              }}
            >
              Em Espera
            </button>
          </div>
        )}
      </S.WrapperButtons>

      <CustomConfirmModal isOpen={modal} onRequestClose={() => setModal(false)}>
        <S.ContentModalStay>
          <Text>
            Deseja realmente colocar o <span>agendamento em espera?</span>
          </Text>

          <S.WrapperButtonsModal>
            <Button data-variant-danger onClick={() => setModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleWait}>Salvar</Button>
          </S.WrapperButtonsModal>
        </S.ContentModalStay>
      </CustomConfirmModal>
    </S.MyMenu>
  );
};
