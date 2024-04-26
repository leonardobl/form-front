import React from "react";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import * as S from "./styles";
import { ISelectOptions } from "../../../types/inputs";
import { MessageErroForm } from "../../Atoms/MessageErroForm";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { useFormStoreRescheduling } from "./useFormStoreRescheduling";
import { MyModal } from "../../Atoms/MyModal";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Text } from "../../Atoms/Text";
import { reverseToBrDate } from "../../../utils/dateTransform";

interface IFormStoreSchedulingProps extends React.ComponentProps<"form"> {}

export const FormStoreRescheduling = (props: IFormStoreSchedulingProps) => {
  const {
    lojasOptions,
    errors,
    Controller,
    control,
    handleSubmit,
    date,
    horariosOptions,
    setDate,
    modalIsOpen,
    setModalIsOpen,
    diasIndisponiveis,
    isSubmitting,
    register,
    submitReagendamento,
  } = useFormStoreRescheduling();

  return (
    <S.Form {...props} onSubmit={handleSubmit(submitReagendamento)}>
      <S.RescheduleGridWrapper>
        <div>
          <SimpleSelectRHF
            required
            label="Loja"
            id="loja"
            options={lojasOptions}
            placeholder={"Selecione a uma das nossas unidades"}
            // value={lojasOptions?.find(
            //   (item) => item.value === reagendamentoForm.uuidLoja
            // )}
            // onChange={(e: ISelectOptions) => {
            //   setReagendamentoForm((prev) => ({
            //     ...prev,
            //     uuidLoja: e?.value,
            //   }));
            // }}
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
            isLoading={isSubmitting}
            minDate={new Date()}
            label="Data"
            required
            // disabled={!!!reagendamentoForm?.uuidLoja}
            excludeDates={diasIndisponiveis}
            onChange={(e) => {
              setDate(e);
            }}
            placeholderText="__/__/__"
            selected={date}
          />
        </div>
        <div>
          <SimpleSelectRHF
            label="Horário"
            isDisabled={!date}
            // value={
            //   horariosOptions?.find(
            //     (item) => item.value === reagendamentoForm.horaAgendada
            //   ) || null
            // }
            // onChange={(e: ISelectOptions) =>
            //   setReagendamentoForm((prev) => ({
            //     ...prev,
            //     horaAgendada: e?.value,
            //   }))
            // }
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
          {/* <p>{`Confirma sua vistoria para o dia ${reverseToBrDate(
            date?.toLocaleDateString()
          )} às ${reagendamentoForm.horaAgendada}? `}</p> */}
          <Button type="submit" onClick={() => setModalIsOpen(false)}>
            Confirmar
          </Button>
        </S.ModalContent>
      </MyModal>
    </S.Form>
  );
};
