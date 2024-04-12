import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useDeliverys } from "./useDeliverys";
import { ISelectOptions } from "../../../types/inputs";
import { reverseToIsoDate } from "../../../utils/dateTransform";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

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
    handleDownload,
  } = useDeliverys();

  return (
    <S.Container>
      <Title>Deliverys</Title>

      <S.FormFilter onSubmit={handleFilter}>
        <S.HeaderFormFilter>Filtro</S.HeaderFormFilter>
        <S.GridFormFilter>
          <div>
            <InputDate
              required
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
              required
              options={cidadesOptions}
              value={
                cidadesOptions.find(
                  (item) => item?.value === formFilter?.cidade
                ) || null
              }
              onChange={(e: ISelectOptions) =>
                setFormFilter((prev) => ({ ...prev, cidade: e?.value }))
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

      <S.ActionsButtons>
        <Button
          onClick={() => {
            date &&
              handleDownload({
                dia: reverseToIsoDate(date.toLocaleDateString()),
                cidade: cidadesOptions.find(
                  (item) => item.value === formFilter?.cidade
                )?.label,
              });
          }}
        >
          <CloudDownloadIcon sx={{ margin: "0 0.5rem 0 0" }} />
          Exportar
        </Button>
      </S.ActionsButtons>

      <S.List>
        <S.ListHeader>
          <h4>Cliente</h4>
          <h4>Veículo</h4>
          <h4>Placa</h4>
          <h4>Chassi</h4>
          <h4>Cidade</h4>
          <h4>Horário</h4>
        </S.ListHeader>
        <S.ListBody>
          {agendamentos?.map((group) =>
            group?.agendamentos?.map((item) => (
              <S.ListItem key={item?.uuid}>
                <p>{item?.cliente?.nome || "---"}</p>
                <p>{item?.veiculo?.modelo || "---"}</p>
                <p>{item?.veiculo?.placa || "---"}</p>
                <p>{item?.veiculo?.chassi || "---"}</p>
                <p>{item?.delivery?.cidade || "---"}</p>
                <p>{item?.horaAgendada || "---"}</p>
              </S.ListItem>
            ))
          )}
        </S.ListBody>
      </S.List>
    </S.Container>
  );
};
