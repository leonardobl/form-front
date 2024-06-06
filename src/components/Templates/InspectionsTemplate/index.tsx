import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useInspections } from "./useInspections";
import { IconEye } from "../../Atoms/IconEye";

export const InspectionsTemplate = () => {
  const { isMobile, filterOpen, setFilterOpen } = useInspections();

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
        <S.FormFilter>
          <S.FormFilterHeader>
            <h2>Filtro</h2>
          </S.FormFilterHeader>
          <S.FormFilterGrid>
            <div id="wrapperDate">
              <InputDate placeholderText="___/___/___" onChange={() => ""} />
            </div>
            <div>
              <button id="btntext">Limpar tudo</button>
            </div>
            <div>
              <Button>BUSCAR</Button>
            </div>
          </S.FormFilterGrid>
        </S.FormFilter>
      )}

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
          <S.TableItem>
            <p>NOME DO CLIENTE</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade do atendimento</p>
            <p>8:00</p>
            <IconEye
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
              onClick={() => ""}
            />
          </S.TableItem>
          <S.TableItem>
            <p>NOME DO CLIENTE</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade do atendimento</p>
            <p>8:00</p>
            <IconEye
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
              onClick={() => ""}
            />
          </S.TableItem>
          <S.TableItem>
            <p>NOME DO CLIENTE</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade do atendimento</p>
            <p>8:00</p>
            <IconEye
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
              onClick={() => ""}
            />
          </S.TableItem>
          <S.TableItem>
            <p>NOME DO CLIENTE</p>
            <p>Modelo do veículo</p>
            <p>xxxxxxxx</p>
            <p>xxxxxxxx</p>
            <p>Cidade do atendimento</p>
            <p>8:00</p>
            <IconEye
              src="/assets/svgs/eye.svg"
              alt="icone visualizacao"
              data-color-starcheck={
                process.env.REACT_APP_PROJECT === "starcheck"
              }
              data-color-log={process.env.REACT_APP_PROJECT === "log"}
              data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
              data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
              onClick={() => ""}
            />
          </S.TableItem>
        </S.TableItens>
      </S.Table>
    </S.Container>
  );
};
