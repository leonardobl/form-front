import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
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
    setDate,
    diasIndisponiveis,
    isLoading,
    horariosOptions,
    modalIsOpen,
    handleSubmit,
    handleReagendamento,
    setModalIsOpen,
  } = useStore();

  return (
    <S.Container>
      <Title className="title">Loja Física</Title>
      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <SimpleSelect
              required
              label="Loja"
              options={lojasOptions}
              placeholder={"Selecione a uma das nossas unidades"}
              value={lojasOptions?.find((item) => item.value === form.uuidLoja)}
              onChange={(e: ISelectOptions) => {
                setForm((prev) => ({ ...prev, uuidLoja: e?.value }));
              }}
            />
          </div>
          <div>
            <Text>
              Datas e horários <span className="textStrong">disponíveis</span>.{" "}
            </Text>
          </div>
          <div>
            <InputDate
              showIcon
              isLoading={isLoading}
              minDate={new Date()}
              label="Data"
              required
              disabled={!!!form?.uuidLoja}
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

      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
            date?.toLocaleDateString()
          )} às ${form.horaAgendada}? `}</p>
          <Button onClick={handleReagendamento}>CONFIRMAR</Button>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
