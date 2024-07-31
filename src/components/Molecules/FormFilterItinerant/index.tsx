import { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useFormFilterItinerant } from "./useFormFilterItinerant";
import { ISelectOptions } from "../../../types/inputs";
import dayjs from "dayjs";
import { IItineranteListProps } from "../../../types/itinerante";

interface IFormFilterItinerantProps extends ComponentProps<"form"> {
  onClean?: () => void;
  submitForm: (data: IItineranteListProps) => void;
}

export const FormFilterItinerant = ({
  submitForm,
  onClean,
  ...rest
}: IFormFilterItinerantProps) => {
  const {
    unidades,
    Controller,
    control,
    handleSubmit,
    reset,
    date,
    setDate,
    cidades,
  } = useFormFilterItinerant();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Controller
          control={control}
          name="uuidDelivery"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              value={unidades.find((i) => i.value === value) || null}
              options={unidades}
              label="Unidade"
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
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
              selected={date}
              onChange={(e) => {
                setDate(e);
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
            setDate(null);
          }}
        >
          Limpar tudo
        </Button>
        <Button>Buscar</Button>
      </div>
    </S.Form>
  );
};
