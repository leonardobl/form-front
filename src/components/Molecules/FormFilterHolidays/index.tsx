import { Button } from "../../Atoms/Button";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useFormFilterHolidays } from "./useFormFilterHolidays";

export const FormFilterHolidays = () => {
  const { ufs } = useFormFilterHolidays();

  return (
    <S.Form>
      <div>
        <InputDate
          placeholderText="___/___/___"
          showIcon
          label="Data"
          onChange={() => ""}
        />
      </div>

      <div>
        <SimpleSelect label="Tipo" />
      </div>

      <div>
        <SimpleSelect options={ufs} label="UF" />
      </div>

      <div>
        <SimpleSelect label="Cidade" />
      </div>

      <div id="wrapperButtons">
        <Button type="button" data-variant-filter>
          Limpar tudo
        </Button>
        <Button>Buscar</Button>
      </div>
    </S.Form>
  );
};
