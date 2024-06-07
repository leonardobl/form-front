import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useInspections } from "./useInspections";
import { IconEye } from "../../Atoms/IconEye";

export const InspectionsTemplate = () => {
  const {
    isMobile,
    filterOpen,
    setFilterOpen,
    navigate,
    date,
    setDate,
    vistorias,
    cleanData,
    setFormFilter,
    handleSubmit,
  } = useInspections();

  return (
    <S.Container>
      <Title>Minhas Vistorias</Title>

      {isMobile && (
        <S.ButtonFilter onClick={() => setFilterOpen((prev) => !prev)}>
          <img alt="icone filtro" src="/assets/svgs/filter-dark.svg" />
          <span>Filtrar</span>
        </S.ButtonFilter>
      )}

      {filterOpen && (
        <S.FormFilter onSubmit={handleSubmit}>
          <S.FormFilterHeader>
            <h2>Filtro</h2>
          </S.FormFilterHeader>
          <S.FormFilterGrid>
            <div id="wrapperDate">
              <InputDate
                selected={date}
                placeholderText="___/___/___"
                onChange={(e) => {
                  setDate(e);
                  setFormFilter((prev) => ({
                    ...prev,
                    data: e?.toLocaleDateString(),
                  }));
                }}
              />
            </div>
            <div>
              <button id="btntext" type="reset" onClick={cleanData}>
                Limpar tudo
              </button>
            </div>
            <div>
              <Button>BUSCAR</Button>
            </div>
          </S.FormFilterGrid>
        </S.FormFilter>
      )}

      {isMobile ? (
        <S.TableMobile>
          {vistorias?.map((i) => (
            <S.TableMobileItem key={Math.random()}>
              <div>
                <p>
                  {i?.veiculo?.modelo || "---"}
                  <span>{i?.horaAgendada || "---"}</span>
                </p>
                <span>{i?.cliente?.nome || "---"}</span>
              </div>
              <IconEye
                src="/assets/svgs/eye.svg"
                alt="icone visualizacao"
                data-color-starcheck={
                  process.env.REACT_APP_PROJECT === "starcheck"
                }
                data-color-log={process.env.REACT_APP_PROJECT === "log"}
                data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
                onClick={() =>
                  navigate(`/minhas-vistorias/vistoria?id=${i?.uuid}`)
                }
              />
            </S.TableMobileItem>
          ))}
        </S.TableMobile>
      ) : (
        <S.Table>
          <S.TableHeader>
            <h2>Cliente</h2>
            <h2>Veículo</h2>
            <h2>Placa</h2>
            <h2>Chassi</h2>
            <h2>Cidade</h2>
            <h2>Horário</h2>
            <span></span>
          </S.TableHeader>

          <S.TableItens>
            {vistorias?.map((i) => (
              <S.TableItem key={Math.random()}>
                <p>{i?.cliente?.nome || "---"}</p>
                <p>{i?.veiculo?.modelo || "---"}</p>
                <p>{i?.veiculo?.placa || "---"}</p>
                <p>{i?.veiculo?.chassi || "---"}</p>
                <p>{i?.cliente.endereco.cidade || "---"}</p>
                <p>{i?.horaAgendada || "---"}</p>
                <IconEye
                  src="/assets/svgs/eye.svg"
                  alt="icone visualizacao"
                  data-color-starcheck={
                    process.env.REACT_APP_PROJECT === "starcheck"
                  }
                  data-color-log={process.env.REACT_APP_PROJECT === "log"}
                  data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                  data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
                  onClick={() =>
                    navigate(`/minhas-vistorias/vistoria?id=${i?.uuid}`)
                  }
                />
              </S.TableItem>
            ))}
          </S.TableItens>
        </S.Table>
      )}
    </S.Container>
  );
};
