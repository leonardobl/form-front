import dayjs from "dayjs";
import { Button } from "../../Atoms/Button";
import { FormScheduleFilterItinerant } from "../../Molecules/FormScheduleFilterItinerant";
import { Table } from "../../Molecules/Table";
import * as S from "./styles";
import { useScheduleItinetant } from "./useScheduleItinetant";
import { Pagination } from "../../Atoms/Pagination";

export const ScheduleItinetantTemplate = () => {
  const {
    isOpen,
    setIsOpen,
    isMobile,
    itinerantes,
    setNumberPage,
    pagination,
    handleClean,
    handleFilter,
  } = useScheduleItinetant();

  return (
    <S.Container>
      <h1>Itinerantes</h1>

      <S.Wrapper>
        <S.WrapperButton>
          <Button
            data-variant-outline
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/assets/svgs/icon-filter-dark.svg" alt="icone filtro" />
            Filtrar
          </Button>
        </S.WrapperButton>
        {isOpen && (
          <FormScheduleFilterItinerant
            onClean={handleClean}
            submitForm={handleFilter}
          />
        )}

        {itinerantes?.length > 0 ? (
          <Table.Root>
            <Table.WrapperItems>
              {itinerantes.map((i) => (
                <Table.Item
                  columns="1.4fr 1.2fr .8fr .2fr"
                  elements={[
                    <p>
                      <b>CIDADE: </b>
                      {i?.endereco?.cidade}
                    </p>,

                    <p>
                      <b>DATA DE REALIZAÇÃO: </b>
                      {dayjs(i?.dataRealizacao).format("DD/MM/YYYY")}
                    </p>,
                    <p>
                      <b>QTD. VAGAS: </b>
                      {i?.quantidadeVagas}
                    </p>,

                    <S.ButtonSelect onClick={() => i.uuid}>
                      Selecionar
                    </S.ButtonSelect>,
                  ]}
                  key={Math.random()}
                />
              ))}
            </Table.WrapperItems>
          </Table.Root>
        ) : (
          <p>Nenhum item encontrado</p>
        )}

        {itinerantes?.length > 0 && (
          <Pagination
            maxPageNumbersDisplayed={isMobile ? 3 : 10}
            key={`${Math.random()} - ${pagination}`}
            totalPage={pagination.totalPage}
            totalRegister={pagination.totalPage}
            actualPage={pagination.actualPage}
            setNumberPage={setNumberPage}
          />
        )}
      </S.Wrapper>
    </S.Container>
  );
};
