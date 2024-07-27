import { InputDate } from "../../Atoms/Inputs/InputDate";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useHolidaysRegister } from "./useHolidaysRegister";
import dayjs from "dayjs";
import { ISelectOptions } from "../../../types/inputs";
import { TipoFeriadoEnum } from "../../../enums/tipoFeriado";

export const HolidaysRegisterTemplate = () => {
  const {
    Controller,
    TipoOptions,
    cidades,
    control,
    handleSubmit,
    ufs,
    watch,
    data,
    setData,
    submitForm,
  } = useHolidaysRegister();

  return (
    <S.Container>
      <h1>Cadastro de Feriados</h1>

      <S.Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <Controller
            control={control}
            name="dia"
            render={({ field: { onChange } }) => (
              <InputDate
                label="Data"
                selected={data}
                required
                onChange={(e) => {
                  setData(e);
                  onChange(dayjs(e).format("YYYY-MM-DD"));
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
                required
                label="Tipo"
                options={TipoOptions}
                value={TipoOptions.find((e) => e.value === value) || null}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
              />
            )}
          />
        </div>

        {(watch("tipo") === TipoFeriadoEnum.ESTADUAL ||
          watch("tipo") === TipoFeriadoEnum.MUNICIPAL) && (
          <div>
            <Controller
              control={control}
              name="uf"
              render={({ field: { onChange, value } }) => (
                <SimpleSelect
                  required
                  label="UF"
                  options={ufs}
                  value={ufs.find((e) => e.value === value) || null}
                  onChange={(e: ISelectOptions) => onChange(e?.value)}
                />
              )}
            />
          </div>
        )}

        {watch("tipo") === TipoFeriadoEnum.MUNICIPAL && (
          <div>
            <Controller
              control={control}
              name="cidade"
              render={({ field: { onChange, value } }) => (
                <SimpleSelect
                  required
                  key={`${watch("uf")}`}
                  label="Cidade"
                  options={cidades}
                  value={cidades.find((e) => e.value === value) || null}
                  onChange={(e: ISelectOptions) => onChange(e?.value)}
                />
              )}
            />
          </div>
        )}

        <div id="wrapperButton">
          <Button>Salvar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
