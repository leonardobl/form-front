import { Button } from "../../Atoms/Button";
import { FormFilterHolidays } from "../../Molecules/FormFilterHolidays";
import * as S from "./styles";
import { useHolidays } from "./useHolidays";

export const HolidaysTemplate = () => {
  const { open, setOpen } = useHolidays();

  return (
    <S.Container>
      <h1>Feriados Cadastrados</h1>

      <S.WrapperButtons>
        <Button data-variant-outline onClick={() => setOpen((prev) => !prev)}>
          <img src="/assets/svgs/icon-filter-dark.svg" alt="icone filtro" />
          Filtrar
        </Button>

        {open && <FormFilterHolidays onSubmitForm={(e) => console.log(e)} />}

        <Button data-variant-outline id="registerMobile">
          <img src="/assets/svgs/icon-plus.svg" alt="icone filtro" />
          Cadastrar
        </Button>
      </S.WrapperButtons>
    </S.Container>
  );
};
