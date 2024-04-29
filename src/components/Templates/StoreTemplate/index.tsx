import React from "react";
import * as S from "./styles";
import { useStore } from "./useStore";
import { Title } from "../../Atoms/Title";
import { FormStoreScheduling } from "../../Molecules/FormStoreScheduling";
import { FormStoreRescheduling } from "../../Molecules/FormStoreRescheduling";

export const StoreTemplate = () => {
  const { reagendamento, submitAgendamento } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>

      {!reagendamento ? (
        <FormStoreScheduling onSubmitForm={submitAgendamento} />
      ) : (
        <FormStoreRescheduling />
      )}
    </S.Container>
  );
};
