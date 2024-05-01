import React, { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { ISelectOptions } from "../../../types/inputs";
import { Button } from "../../Atoms/Button";
import { useFormResidenceScheduling } from "./useFormResidenceScheduling";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";

interface IFormResidenceSchedulingProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IAgendamentoCadastroForm) => void;
}

export const FormResidenceScheduling = ({
  onSubmitForm,
  ...rest
}: IFormResidenceSchedulingProps) => {
  const { cidadesOptions, handleSubmit } = useFormResidenceScheduling();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <S.GridWrapper>
        <div>
          <SimpleSelectRHF
            required
            label="Cidade"
            options={cidadesOptions}
            placeholder={"Selecione a uma das nossas unidades"}
            // value={cidadesOptions.find(
            //   (item) => item.value === form.uuidDelivery
            // )}
            // onChange={(e: ISelectOptions) => {
            //   setForm((prev) => ({ ...prev, uuidDelivery: e?.value }));
            // }}
          />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.GridWrapper>
    </S.Form>
  );
};
