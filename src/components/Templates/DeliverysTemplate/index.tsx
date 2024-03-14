import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useDeliverys } from "./useDeliverys";
import { ISelectOptions } from "../../../types/inputs";

export const DeliverysTemplates = () => {
  const {
    date,
    setDate,
    formFilter,
    setFormFilter,
    cidadesOptions,
    agendamentos,
    handleClean,
    handleFilter,
  } = useDeliverys();

  return (
    <S.Container>
      <Title>Deliverys</Title>

      <S.FormFilter onSubmit={handleFilter}>
        <S.HeaderFormFilter>Filtro</S.HeaderFormFilter>
        <S.GridFormFilter>
          <div>
            <InputDate
              isClearable
              label="Data"
              selected={date}
              placeholderText="___/___/___"
              onChange={(e) => {
                setDate(e);
              }}
            />
          </div>
          <div>
            <SimpleSelect
              isClearable
              options={cidadesOptions}
              value={
                cidadesOptions.find(
                  (item) => item.label === formFilter?.cidade
                ) || null
              }
              onChange={(e: ISelectOptions) =>
                setFormFilter((prev) => ({ ...prev, cidade: e?.label }))
              }
              label="Cidade"
            />
          </div>
          <div>
            <button type="button" onClick={handleClean} className="buttonClean">
              Limpar tudo
            </button>
          </div>
          <div>
            <Button>BUSCAR</Button>
          </div>
        </S.GridFormFilter>
      </S.FormFilter>

      <S.List>
        <S.ListHeader>
          <h4>Cliente</h4>
          <h4>Veículo</h4>
          <h4>Placa</h4>
          <h4>Chassi</h4>
          <h4>Cidade</h4>
          <h4>Horário</h4>
          <button>
            <S.WrapperImgsButton>
              <img
                src="/assets/svg/download-icon.svg"
                alt="icone download documento"
              />
              <img src="/assets/svg/doc-icon.svg" alt="icone documento" />
            </S.WrapperImgsButton>
            Exportar
          </button>
        </S.ListHeader>
        <S.ListBody>
          {agendamentos?.map((item) => (
            <S.ListItem key={item?.uuid}>
              <p>{item?.cliente?.nome || "---"}</p>
              <p>{item?.veiculo?.modelo || "---"}</p>
              <p>{item?.veiculo?.placa || "---"}</p>
              <p>{item?.veiculo?.chassi || "---"}</p>
              <p>{item?.cliente?.endereco?.cidade || "---"}</p>
              <p>{item?.horaAgendada || "---"}</p>
              <p></p>
            </S.ListItem>
          ))}
        </S.ListBody>
      </S.List>
    </S.Container>
  );
};
