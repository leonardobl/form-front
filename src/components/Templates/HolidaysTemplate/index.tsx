import { Button } from "../../Atoms/Button";
import { Pagination } from "../../Atoms/Pagination";
import { Table } from "../../Molecules/Table";
import { FormFilterHolidays } from "../../Molecules/FormFilterHolidays";
import * as S from "./styles";
import { useHolidays } from "./useHolidays";
import { reverseToBrDate } from "../../../utils/dateTransform";

export const HolidaysTemplate = () => {
  const {
    open,
    setOpen,
    HEADERS,
    isMobile,
    pagination,
    setNumberPage,
    feriados,
    handleClean,
    navigate,
    handleFilter,
  } = useHolidays();

  return (
    <S.Container>
      <h1>Feriados Cadastrados</h1>

      <S.WrapperButtons>
        <Button data-variant-outline onClick={() => setOpen((prev) => !prev)}>
          <img src="/assets/svgs/icon-filter-dark.svg" alt="icone filtro" />
          Filtrar
        </Button>

        {open && (
          <FormFilterHolidays
            onClean={handleClean}
            onSubmitForm={handleFilter}
          />
        )}

        <Button
          data-variant-outline
          id="registerMobile"
          onClick={() => navigate("/configuracoes/feriados/cadastro")}
        >
          <img src="/assets/svgs/icon-plus.svg" alt="icone filtro" />
          Cadastrar
        </Button>
      </S.WrapperButtons>

      <Table.Root>
        <Table.Header
          headers={HEADERS}
          columns="1fr 1fr 1fr 1fr .5fr"
          button={
            <Button
              data-variant-outline
              onClick={() => navigate("/configuracoes/feriados/cadastro")}
            >
              <img src="/assets/svgs/icon-plus.svg" alt="icone adicionar" />
              Cadastrar
            </Button>
          }
        />
        <Table.WrapperItems>
          {feriados.map((i) =>
            isMobile ? (
              <S.ItemMobile key={`${Math.random()}`}>
                <div>
                  <p>{i?.cidade}</p>
                  <p>{i?.dia}</p>
                </div>
                <span>{i?.tipo}</span>
              </S.ItemMobile>
            ) : (
              <Table.Item
                key={`${Math.random()}`}
                columns="1fr 1fr 1fr 1fr .5fr"
                values={[reverseToBrDate(i?.dia), i?.tipo, i?.cidade, i?.uf]}
              />
            )
          )}
        </Table.WrapperItems>
      </Table.Root>

      {feriados?.length > 0 && (
        <Pagination
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
          key={`${Math.random()} - ${pagination}`}
          totalPage={pagination.totalPage}
          totalRegister={pagination.totalPage}
          actualPage={pagination.actualPage}
          setNumberPage={setNumberPage}
        />
      )}
    </S.Container>
  );
};
