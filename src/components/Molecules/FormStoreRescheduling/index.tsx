import React from "react";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import * as S from "./styles";
import { useFormStoreRescheduling } from "./useFormStoreRescheduling";
import { MyModal } from "../../Atoms/MyModal";
import { Text } from "../../Atoms/Text";
import { ISelectOptions } from "../../../types/inputs";
import { InputDateRHF } from "../../Atoms/InputsRHF/InputDateRHF";
import { MessageErroForm } from "../../Atoms/MessageErroForm";

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
    handleReagendamento,
    diasIndisponiveis,
    watch,
    isLoading,
    modal,
    setModal,
    submitForm,
  } = useFormStoreRescheduling();

  return (
    <S.Form {...props} onSubmit={handleSubmit(submitForm)}>
      <S.RescheduleGridWrapper>
        <div>
          <Controller
            control={control}
            name="uuidLoja"
            render={({ field: { value, onChange } }) => (
              <SimpleSelectRHF
                required
                label="Loja"
                id="loja"
                value={lojasOptions.find((item) => item.value === value)}
                options={lojasOptions}
                placeholder={"Selecione a uma das nossas unidades"}
                onChange={(e: ISelectOptions) => onChange(e.value)}
              />
            )}
          />
          {errors?.uuidLoja?.message && (
            <MessageErroForm>{errors.uuidLoja.message}</MessageErroForm>
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
            name={"diaAgendado"}
            render={({ field: { onChange, value } }) => (
              <InputDateRHF
                showIcon
                isLoading={isLoading}
                minDate={new Date()}
                label="Data"
                required
                disabled={!!!watch("uuidLoja")}
                excludeDates={diasIndisponiveis}
                onChange={(e) => {
                  setDate(e);
                  onChange(
                    e?.toLocaleDateString()?.split("/")?.reverse()?.join("-")
                  );
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
                isDisabled={!date}
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

      <MyModal
        isOpen={modal.isOpen}
        onRequestClose={() => setModal({ isOpen: false })}
      >
        <S.ModalContent>
          <p>{`Confirma sua vistoria para o dia ${watch(
            "diaAgendado"
          )} às ${watch("horaAgendada")}? `}</p>
          <Button onClick={handleReagendamento}>Confirmar</Button>
        </S.ModalContent>
      </MyModal>
    </S.Form>
  );
};
