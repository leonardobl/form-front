import React from "react";
import * as S from "./styles";
import { useOptionsSchedules } from "./useOptionsSchedules";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Modal } from "@mui/material";
import { Text } from "../Text";
import { SimpleSelect } from "../Selects/SimpleSelect";
import { Button } from "../Button";

type OptionsSchedulesProps = {
  status: StatusAgendamentoEnum;
  handleStart: () => void;
  handleAttribute?: () => void;
};

export const OptionsSchedules = ({
  status,
  handleStart,
  handleAttribute,
}: OptionsSchedulesProps) => {
  const {
    isCliente,
    isOpen,
    setIsOpen,
    disabled,
    isAdmin,
    modalIsOpen,
    setModalIsOpen,
  } = useOptionsSchedules();

  return (
    <S.Container>
      <img
        data-disabled={disabled}
        src="/assets/svgs/dots.svg"
        alt="dots"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <S.Menu data-open={isOpen}>
        {status === "AGENDADO" && !isCliente && (
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
        {status === "AGENDADO" && isAdmin && handleAttribute && (
          <div>
            <button
              onClick={() => {
                setModalIsOpen(true);
                setIsOpen(false);
              }}
            >
              Atribuir
            </button>
          </div>
        )}
      </S.Menu>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <S.ContentModal>
          <Text>
            Escolha o <span className="textStrong">vistoriador</span> a qual
            será atribuída a vistoria móvel.
          </Text>
          <SimpleSelect />

          <Button>Confirmar</Button>
        </S.ContentModal>
      </Modal>
    </S.Container>
  );
};
