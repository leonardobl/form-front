import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputDateRHF } from "../../Atoms/InputsRHF/InputDateRHF";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { useFormResidenceRescheduling } from "./useFormResidenceRescheduling";
import { IReagendamentoForm } from "../../../types/agendamento";

interface IFormResidenceReschedulingProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IReagendamentoForm) => void;
}

export const FormResidenceRescheduling = ({
  onSubmitForm,
  ...rest
}: IFormResidenceReschedulingProps) => {
  const {
    cidadesOptions,
    date,
    diasIndisponiveis,
    isLoading,
    setDate,
    horariosOptions,
    handleSubmit,
  } = useFormResidenceRescheduling();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(IReagendamentoForm)}>
      <S.RescheduleGridWrapper>
        <div>
          <SimpleSelectRHF
            required
            label="Cidade"
            options={cidadesOptions}
            placeholder={"Selecione a uma das nossas unidades"}
            // value={cidadesOptions.find(
            //   (item) => item.value === reagendamentoForm.uuidDelivery
            // )}
            // onChange={(e: ISelectOptions) => {
            //   setReagendamentoForm((prev) => ({
            //     ...prev,
            //     uuidDelivery: e?.value,
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
          <InputDateRHF
            showIcon
            isLoading={isLoading}
            minDate={new Date()}
            label="Data"
            required
            // disabled={!!!reagendamentoForm?.uuidDelivery}
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
    </S.Form>
  );
};
