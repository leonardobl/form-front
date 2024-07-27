import dayjs from "dayjs";
import { Button } from "../../Atoms/Button";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useFormFilterHolidays } from "./useFormFilterHolidays";
import { ISelectOptions } from "../../../types/inputs";
import { ComponentProps } from "react";
import { IFeriadoListProps } from "../../../types/feriado";

interface IFormFilterHolidaysProps extends ComponentProps<"form"> {
  onSubmitForm: (data: IFeriadoListProps) => void;
  onClean?: () => void;
}

export const FormFilterHolidays = ({
  onSubmitForm,
  onClean,
  ...rest
}: IFormFilterHolidaysProps) => {
  const {
    ufs,
    Controller,
    cidades,
    control,
    handleSubmit,
    watch,
    data,
    TipoOptions,
    setData,
    reset,
  } = useFormFilterHolidays();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <Controller
          control={control}
          name="dia"
          render={({ field: { onChange } }) => (
            <InputDate
              selected={data}
              placeholderText="___/___/___"
              showIcon
              label="Data"
              onChange={(e) => {
                setData(e);
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("");
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="tipo"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={TipoOptions}
              label="Tipo"
              value={TipoOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="uf"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={ufs}
              label="UF"
              value={ufs.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
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
              key={`${watch("uf")} - ${Math.random()}`}
              label="Cidade"
              value={cidades.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
              options={cidades}
            />
          )}
        />
      </div>

      <div id="wrapperButtons">
        <Button
          type="button"
          data-variant-filter
          onClick={() => {
            reset();
            setData(null);
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
