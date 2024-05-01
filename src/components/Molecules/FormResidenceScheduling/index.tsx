import React, { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import { useFormResidenceScheduling } from "./useFormResidenceScheduling";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { ISelectOptions } from "../../../types/inputs";
import { MessageErroForm } from "../../Atoms/MessageErroForm";

interface IFormResidenceSchedulingProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IAgendamentoCadastroForm) => void;
}

export const FormResidenceScheduling = ({
  onSubmitForm,
  ...rest
}: IFormResidenceSchedulingProps) => {
  const { cidadesOptions, handleSubmit, Controller, control, errors } =
    useFormResidenceScheduling();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <S.GridWrapper>
        <div>
          <Controller
            name="uuidDelivery"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SimpleSelectRHF
                required
                inputId="delivery"
                label="Cidade"
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
          <Button>Avançar</Button>
        </div>
      </S.GridWrapper>
    </S.Form>
  );
};
