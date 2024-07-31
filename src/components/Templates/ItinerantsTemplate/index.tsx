import { v4 } from "uuid";
import { Button } from "../../Atoms/Button";
import { Container } from "../../Atoms/Container";
import { Eye } from "../../Atoms/Eye";
import { Pagination } from "../../Atoms/Pagination";
import { FormFilterItinerant } from "../../Molecules/FormFilterItinerant";
import { Table } from "../../Molecules/Table";
import * as S from "./styles";
import { useItinerant } from "./useItinerant";
import dayjs from "dayjs";

export const ItinerantsTemplate = () => {
  const {
    isMobile,
    isOpen,
    setIsOpen,
    pagination,
    setNumberPage,
    navigate,
    itinerantes,
    handleClean,
    handleSubmit,
  } = useItinerant();

  return (
    <Container>
      <S.Wrapper>
        <h1>Itinerantes Cadastrados</h1>

        <S.WrapperButtons>
          <Button
            data-variant-outline
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img src="/assets/svgs/icon-filter-dark.svg" alt="icone filtro" />
            Filtrar
          </Button>

          {isOpen && (
            <FormFilterItinerant
              submitForm={handleSubmit}
              onClean={handleClean}
            />
          )}

          <Button
            data-variant-outline
            id="register"
            onClick={() => navigate("/configuracoes/itinerantes/cadastro")}
          >
            <img src="/assets/svgs/icon-plus.svg" alt="icone de adicao" />
            Cadastrar
          </Button>
        </S.WrapperButtons>

        <Table.Root>
          <Table.Header
            columns="1fr 1fr 1fr 1fr .5fr"
            button={
              <Button
                data-variant-outline
                onClick={() => navigate("/configuracoes/itinerantes/cadastro")}
              >
                <img src="/assets/svgs/icon-plus.svg" alt="icone adicionar" />{" "}
                Cadastrar
              </Button>
            }
            headers={[
              "Unidade",
              "Cidade",
              "Data de Realização",
              "Qtd. de Vagas",
            ]}
          />

          <Table.WrapperItems>
            {itinerantes?.length > 0 &&
              itinerantes?.map((i) =>
                isMobile ? (
                  <S.ItemMobile key={`${Math.random()}`}>
                    <S.ItemMobileContent>
                      <span>
                        {dayjs(i?.dataRealizacao).format("DD/MM/YYYY")}
                      </span>
                      <p>
                        Unidade: <span>{i?.endereco?.cidade}</span>
                      </p>
                      <p>
                        Cidade: <span>{i?.delivery?.cidade}</span>
                      </p>
                    </S.ItemMobileContent>
                    <S.WrapperIcons>
                      <img
                        src="/assets/svgs/icon-calendar-dark.svg"
                        alt="icone calendario"
                        onClick={() =>
                          navigate(
                            `/configuracoes/itinerantes/reagendamento?id=${v4()}`
                          )
                        }
                      />
                      <Eye
                        onClick={() =>
                          navigate(
                            `/configuracoes/itinerantes/detalhe?id=${v4()}`
                          )
                        }
                      />
                    </S.WrapperIcons>
                  </S.ItemMobile>
                ) : (
                  <Table.Item
                    key={`${Math.random()}`}
                    columns="1fr 1fr 1fr 1fr .5fr"
                    values={[
                      i?.delivery?.cidade,
                      i?.endereco?.cidade,
                      dayjs(i?.dataRealizacao).format("DD/MM/YYYY"),
                      `${i?.quantidadeVagas}`,
                    ]}
                    lastElement={
                      <S.WrapperIcons>
                        <img
                          src="/assets/svgs/icon-calendar-dark.svg"
                          alt="icone calendario"
                          onClick={() =>
                            navigate(
                              `/configuracoes/itinerantes/reagendamento?id=${i?.uuid}`
                            )
                          }
                        />
                        <Eye
                          onClick={() =>
                            navigate(
                              `/configuracoes/itinerantes/detalhe?id=${i?.uuid}`
                            )
                          }
                        />
                      </S.WrapperIcons>
                    }
                  />
                )
              )}
          </Table.WrapperItems>
        </Table.Root>

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
    </Container>
  );
};
