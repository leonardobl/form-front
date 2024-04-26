import React from "react";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { useFormStoreScheduling } from "./useFormStoreScheduling";
import { Button } from "../../Atoms/Button";
import * as S from "./styles";
import { ISelectOptions } from "../../../types/inputs";
import { MessageErroForm } from "../../Atoms/MessageErroForm";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";

interface IFormStoreSchedulingProps extends React.ComponentProps<"form"> {
  submit: (data: IAgendamentoCadastroForm) => void;
}

export const FormStoreScheduling = (props: IFormStoreSchedulingProps) => {
  const { lojasOptions, errors, Controller, control, handleSubmit } =
    useFormStoreScheduling();

  return (
    <S.Form {...props} onSubmit={handleSubmit(props.submit)}>
      <S.GridWrapper>
        <div>
          <Controller
            control={control}
            name={"uuidLoja"}
            render={({ field: { onChange, value } }) => (
              <SimpleSelectRHF
                label="Loja"
                required
                inputId="loja"
                value={lojasOptions.find((item) => item.value === value)}
                onChange={(e: ISelectOptions) => onChange(e.value)}
                options={lojasOptions}
                placeholder={"Selecione a uma das nossas unidades"}
              />
            )}
          />
          {errors?.uuidLoja?.message && (
            <MessageErroForm>{errors?.uuidLoja?.message}</MessageErroForm>
          )}
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.GridWrapper>
    </S.Form>
  );
};
