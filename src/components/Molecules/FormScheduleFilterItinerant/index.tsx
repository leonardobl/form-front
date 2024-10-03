import { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";

import { ISelectOptions } from "../../../types/inputs";
import dayjs from "dayjs";
import { IItineranteListProps } from "../../../types/itinerante";
import { useFormScheduleFilterItinerant } from "./useFormScheduleFilterItinerant";

interface IFormFilterItinerantProps extends ComponentProps<"form"> {
  onClean?: () => void;
  submitForm: (data: IItineranteListProps) => void;
}

export const FormScheduleFilterItinerant = ({
  submitForm,
  onClean,
  ...rest
}: IFormFilterItinerantProps) => {
  const { Controller, control, handleSubmit, reset, cidades } =
    useFormScheduleFilterItinerant();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Controller
          control={control}
          name="cidade"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              value={cidades.find((i) => i.value === value) || null}
              options={cidades}
              label="Cidade"
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="dataRealizacao"
          render={({ field: { onChange, value } }) => (
            <InputDate
              placeholderText="___/___/___"
              label="Data de Realização"
              showIcon
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) => {
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("");
              }}
            />
          )}
        />
      </div>

      <div>
        <Button
          data-variant-text
          type="reset"
          onClick={() => {
            reset();
            onClean && onClean();
          }}
        >
          Limpar tudo
        </Button>
        <Button>Buscar</Button>
      </div>
    </S.Form>
  );
};
