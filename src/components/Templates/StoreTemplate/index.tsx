import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useStore } from "./useStore";
import { ISelectOptions } from "../../../types/inputs";
import { Title } from "../../Atoms/Title";

import { reverseToBrDate } from "../../../utils/dateTransform";
import { MyModal } from "../../Atoms/MyModal";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { MessageErroForm } from "../../Atoms/MessageErroForm";
import { FormStoreScheduling } from "../../Molecules/FormStoreScheduling";

export const StoreTemplate = () => {
  const {
    lojasOptions,
    date,
    reagendamentoForm,
    setReagendamentoForm,
    setDate,
    diasIndisponiveis,
    isLoading,
    horariosOptions,
    modalIsOpen,
    handleSubmit,
    setModalIsOpen,
    reagendamento,
    submitAgendamento,
    register,
    Controller,
    control,
    errors,
  } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>
      {!reagendamento ? (
        <FormStoreScheduling submit={submitAgendamento} />
      ) : (
        <>
          <S.Form onSubmit={handleSubmit(submitAgendamento)}>
            <S.RescheduleGridWrapper>
              <div>
                <SimpleSelect
                  required
                  label="Loja"
                  id="loja"
                  options={lojasOptions}
                  placeholder={"Selecione a uma das nossas unidades"}
                  value={lojasOptions?.find(
                    (item) => item.value === reagendamentoForm.uuidLoja
                  )}
                  onChange={(e: ISelectOptions) => {
                    setReagendamentoForm((prev) => ({
                      ...prev,
                      uuidLoja: e?.value,
                    }));
                  }}
                />
              </div>
              <div>
                <Text>
                  Datas e horários{" "}
                  <span className="textStrong">disponíveis</span>.{" "}
                </Text>
              </div>
              <div>
                <InputDate
                  showIcon
                  isLoading={isLoading}
                  minDate={new Date()}
                  label="Data"
                  required
                  disabled={!!!reagendamentoForm?.uuidLoja}
                  excludeDates={diasIndisponiveis}
                  onChange={(e) => {
                    setDate(e);
                  }}
                  placeholderText="__/__/__"
                  selected={date}
                />
              </div>
              <div>
                <SimpleSelect
                  label="Horário"
                  isDisabled={!date}
                  value={
                    horariosOptions?.find(
                      (item) => item.value === reagendamentoForm.horaAgendada
                    ) || null
                  }
                  onChange={(e: ISelectOptions) =>
                    setReagendamentoForm((prev) => ({
                      ...prev,
                      horaAgendada: e?.value,
                    }))
                  }
                  options={horariosOptions}
                  required
                />
              </div>

              <div>
                <Button>Avançar</Button>
              </div>
            </S.RescheduleGridWrapper>

            <MyModal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <S.ModalContent>
                <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
                  date?.toLocaleDateString()
                )} às ${reagendamentoForm.horaAgendada}? `}</p>
                <Button type="submit" onClick={() => setModalIsOpen(false)}>
                  Confirmar
                </Button>
              </S.ModalContent>
            </MyModal>
          </S.Form>
        </>
      )}
    </S.Container>
  );
};
