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

export const ResidenceTemplate = () => {
  const {
    cidadesOptions,
    form,
    setForm,
    date,
    handleSubmit,
    setDate,
    isLoading,
    modalIsOpen,
    horariosOptions,
    diasIndisponiveis,
  } = useResidence();

  return (
    <LayoutTemplate>
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
              <Text>
                Datas e horários <span className="textStrong">disponíveis</span>
                .{" "}
              </Text>
            </div>
            <div>
              <InputDate
                showIcon
                isLoading={isLoading}
                minDate={new Date()}
                label="Data"
                required
                disabled={!!!form?.uuidDelivery}
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
                    (item) => item.value === form.horaAgendada
                  ) || null
                }
                onChange={(e: ISelectOptions) =>
                  setForm((prev) => ({ ...prev, horaAgendada: e?.value }))
                }
                options={horariosOptions}
                required
              />
            </div>

            <div>
              <Button>Avançar</Button>
            </div>
          </S.GridWrapper>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};