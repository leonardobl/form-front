import React from "react";
import * as S from "./styles";

import { Button } from "../../Atoms/Button";
import { useResidence } from "./useResidence";
import { Title } from "../../Atoms/Title";
import { MyModal } from "../../Atoms/MyModal";
import { FormResidenceScheduling } from "../../Molecules/FormResidenceScheduling";
import { FormResidenceRescheduling } from "../../Molecules/FormResidenceRescheduling";

export const ResidenceTemplate = () => {
  const {
    setModal,
    modal,
    handleSubmitAgendamentoForm,
    handleReagendamento,
    onSubmitReagendamentoForm,
    reagendamento,
  } = useResidence();

  return (
    <S.Container>
      <Title className="title">Domicílio</Title>
      {!reagendamento ? (
        <FormResidenceScheduling onSubmitForm={handleSubmitAgendamentoForm} />
      ) : (
        <>
          <FormResidenceRescheduling onSubmitForm={onSubmitReagendamentoForm} />
          <MyModal
            isOpen={modal.isOpen}
            onRequestClose={() => setModal({ isOpen: false })}
          >
            <S.ModalContent>
              <p>{`Confirma sua vistoria para o dia ${modal?.dataForm?.diaAgendado} às ${modal?.dataForm?.horaAgendada}? `}</p>
              <Button onClick={handleReagendamento}>Confirmar</Button>
            </S.ModalContent>
          </MyModal>
        </>
      )}
    </S.Container>
  );
};
