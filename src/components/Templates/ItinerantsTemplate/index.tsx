import { v4 } from "uuid";
import { Button } from "../../Atoms/Button";
import { Container } from "../../Atoms/Container";
import { Eye } from "../../Atoms/Eye";
import { Pagination } from "../../Atoms/Pagination";
import { FormFilterItinerant } from "../../Molecules/FormFilterItinerant";
import { Table } from "../../Molecules/Table";
import * as S from "./styles";
import { useItinerant } from "./useItinerant";

export const ItinerantsTemplate = () => {
  const {
    isMobile,
    isOpen,
    setIsOpen,
    VALUES,
    pagination,
    setNumberPage,
    navigate,
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

          {isOpen && <FormFilterItinerant />}

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
            {VALUES.length > 0 &&
              VALUES.map((i) =>
                isMobile ? (
                  <S.ItemMobile key={`${Math.random()}`}>
                    <S.ItemMobileContent>
                      <S.ItemMobileContentText>
                        <p>{i[0]}</p>
                        <p>{i[2]}</p>
                      </S.ItemMobileContentText>
                      <span>{i[3]}</span>
                    </S.ItemMobileContent>
                    <S.WrapperIcons>
                      <img
                        src="/assets/svgs/icon-calendar-dark.svg"
                        alt="icone calendario"
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
                    values={i}
                    lastElement={
                      <S.WrapperIcons>
                        <img
                          src="/assets/svgs/icon-calendar-dark.svg"
                          alt="icone calendario"
                        />
                        <Eye
                          onClick={() =>
                            navigate(
                              `/configuracoes/itinerantes/detalhe?id=${v4()}`
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

        {VALUES?.length > 0 && (
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
