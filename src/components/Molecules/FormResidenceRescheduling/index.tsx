import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputDateRHF } from "../../Atoms/InputsRHF/InputDateRHF";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import { Text } from "../../Atoms/Text";
import { useFormResidenceRescheduling } from "./useFormResidenceRescheduling";
import { IReagendamentoForm } from "../../../types/agendamento";
import { ISelectOptions } from "../../../types/inputs";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import { MessageErroForm } from "../../Atoms/MessageErroForm";

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
    Controller,
    control,
    handleSubmit,
    watch,
    errors,
  } = useFormResidenceRescheduling();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <S.RescheduleGridWrapper>
        <div>
          <Controller
            control={control}
            name="uuidDelivery"
            render={({ field: { value, onChange } }) => (
              <SimpleSelectRHF
                required
                label="Cidade"
                inputId="cidade"
                options={cidadesOptions}
                placeholder={"Selecione a uma das nossas unidades"}
                value={cidadesOptions.find((item) => item.value === value)}
                onChange={(e: ISelectOptions) => {
                  onChange(e.value);
                }}
              />
            )}
          />
          {errors?.uuidDelivery?.message && (
            <MessageErroForm>{errors.uuidDelivery.message}</MessageErroForm>
          )}
        </div>
        <div>
          <Text>
            Datas e horários <span className="textStrong">disponíveis</span>.{" "}
          </Text>
        </div>
        <div>
          <Controller
            control={control}
            name="diaAgendado"
            render={({ field: { value, onChange } }) => (
              <InputDateRHF
                showIcon
                isLoading={isLoading}
                minDate={new Date()}
                label="Data"
                required
                id="data"
                disabled={!watch("uuidDelivery")}
                excludeDates={diasIndisponiveis}
                onChange={(e) => {
                  setDate(e);
                  onChange(reverseToIsoDate(e.toLocaleDateString()));
                }}
                placeholderText="__/__/__"
                selected={date}
              />
            )}
          />
          {errors?.diaAgendado?.message && (
            <MessageErroForm>{errors.diaAgendado.message}</MessageErroForm>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="horaAgendada"
            render={({ field: { value, onChange } }) => (
              <SimpleSelectRHF
                label="Horário"
                inputId="horario"
                isDisabled={!watch("diaAgendado")}
                value={
                  horariosOptions?.find((item) => item.value === value) || null
                }
                onChange={(e: ISelectOptions) => onChange(e.value)}
                options={horariosOptions}
                required
              />
            )}
          />
          {errors?.horaAgendada?.message && (
            <MessageErroForm>{errors.horaAgendada.message}</MessageErroForm>
          )}
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.RescheduleGridWrapper>
    </S.Form>
  );
};
