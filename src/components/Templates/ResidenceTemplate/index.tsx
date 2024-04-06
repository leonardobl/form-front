import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useResidence } from "./useResidence";
import { ISelectOptions } from "../../../types/inputs";
import { Title } from "../../Atoms/Title";
import { MyModal } from "../../Atoms/MyModal";
import { reverseToBrDate } from "../../../utils/dateTransform";

export const ResidenceTemplate = () => {
  const {
    cidadesOptions,
    form,
    setForm,
    date,
    handleSubmit,
    setModalIsOpen,
    setDate,
    isLoading,
    modalIsOpen,
    horariosOptions,
    diasIndisponiveis,
    handleReagendamento,
  } = useResidence();

  return (
    <S.Container>
      <Title className="title">Domicílio</Title>
      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <SimpleSelect
              required
              label="Cidade"
              options={cidadesOptions}
              placeholder={"Selecione a uma das nossas unidades"}
              value={cidadesOptions.find(
                (item) => item.value === form.uuidDelivery
              )}
              onChange={(e: ISelectOptions) => {
                setForm((prev) => ({ ...prev, uuidDelivery: e?.value }));
              }}
            />
          </div>

          <div>
            <Button>Avançar</Button>
          </div>
        </S.GridWrapper>
      </S.Form>
      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
            date?.toLocaleDateString()
          )} às ${form.horaAgendada}? `}</p>
          <Button onClick={handleReagendamento}>Confirmar</Button>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
