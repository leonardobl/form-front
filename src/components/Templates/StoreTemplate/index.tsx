import React from "react";
import * as S from "./styles";
import { useStore } from "./useStore";
import { Title } from "../../Atoms/Title";
import { FormStoreScheduling } from "../../Molecules/FormStoreScheduling";
import { FormStoreRescheduling } from "../../Molecules/FormStoreRescheduling";
import { MyModal } from "../../Atoms/MyModal";
import { Button } from "../../Atoms/Button";
import { reverseToBrDate } from "../../../utils/dateTransform";

export const StoreTemplate = () => {
  const {
    reagendamento,
    submitAgendamento,
    handleReagendamento,
    modal,
    setModal,
    submitReagendamentoForm,
  } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>

      {!reagendamento ? (
        <FormStoreScheduling onSubmitForm={submitAgendamento} />
      ) : (
        <FormStoreRescheduling onSubmitForm={submitReagendamentoForm} />
      )}

      <MyModal
        isOpen={modal.isOpen}
        onRequestClose={() => setModal({ isOpen: false })}
      >
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${modal?.reagendamento?.diaAgendado} às ${modal?.reagendamento?.horaAgendada}? `}</p>
          <Button onClick={handleReagendamento}>Confirmar</Button>
        </S.ModalContent>
      </MyModal>
      <MyModal
          isOpen={modal.isOpen}
          onRequestClose={() => setModal({ isOpen: false })}
        >
          <S.ModalContent>
            <S.HeaderModal>
              <S.WrapperButtonClose>
                <button onClick={() => setModal({ isOpen: false })}>X</button>
              </S.WrapperButtonClose>
            </S.HeaderModal>
            <S.WrapperText>
              <p>{`Confirma sua vistoria para o dia `}<b>{`${reverseToBrDate(modal?.reagendamento?.diaAgendado)} às ${modal?.reagendamento?.horaAgendada}?`}</b></p>
              <S.WrapperButtonsModal>
                <button onClick={() => setModal({ isOpen: false })}>Cancelar</button>
                <Button onClick={handleReagendamento}>
                  Confirmar
                </Button>
              </S.WrapperButtonsModal>
            </S.WrapperText>
          </S.ModalContent>
        </MyModal>
    </S.Container>
  );
};
