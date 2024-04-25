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

export const StoreTemplate = () => {
  const {
    lojasOptions,
    date,
    form,
    setForm,
    reagendamentoForm,
    setReagendamentoForm,
    setDate,
    diasIndisponiveis,
    isLoading,
    horariosOptions,
    modalIsOpen,
    handleSubmit,
    handleReagendamento,
    sessionAgendamento,
    setModalIsOpen,
  } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>
      {!sessionAgendamento?.reagendamento ? (
        <S.Form onSubmit={handleSubmit}>
          <S.GridWrapper>
            <div>
              <SimpleSelect
                required
                label="Loja"
                inputId="loja"
                options={lojasOptions}
                placeholder={"Selecione a uma das nossas unidades"}
                value={lojasOptions?.find(
                  (item) => item.value === form.uuidLoja
                )}
                onChange={(e: ISelectOptions) => {
                  setForm((prev) => ({ ...prev, uuidLoja: e?.value }));
                }}
              />
            </div>

            <div>
              <Button>Avançar</Button>
            </div>
          </S.GridWrapper>
        </S.Form>
      ) : (
        <>
          <S.Form onSubmit={handleSubmit}>
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
          </S.Form>
          <MyModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <S.ModalContent>
              <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
                date?.toLocaleDateString()
              )} às ${reagendamentoForm.horaAgendada}? `}</p>
              <Button onClick={handleReagendamento}>Confirmar</Button>
            </S.ModalContent>
          </MyModal>
        </>
      )}
    </S.Container>
  );
};
