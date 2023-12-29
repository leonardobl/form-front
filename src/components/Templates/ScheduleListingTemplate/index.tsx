import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Pagination } from "../../Atoms/Pagination";

export const ScheduleListingTemplate = () => {
  const [visao, setVisao] = useSessionStorage("visao");

  const statusOptions = Object.values(StatusAgendamentoEnum).map((item) => ({
    value: item,
    label: item.split("_").join(" "),
  }));

  const colorsStatus = {
    INICIADO: {
      color: "#0025A8",
    },
    "AGUARDANDO PAGAMENTO": {
      color: "#D0C808",
    },
    AGENDADO: {
      color: "#558FFF",
    },
    FINALIZADO: {
      color: "#26BE51",
    },
    CANCELADO: {
      color: "#E42E30",
    },
  };

  const dataGrid = [
    {
      tipo: "Presencial",
      Veículo: "Modelo do veículo",
      Loja: "Nome da loja",
      Cidade: "Cidade do atendimento",
      "Data / Hora": "03/01/2024",
      Status: "AGUARDANDO PAGAMENTO",
    },
    {
      tipo: "Domiciliar",
      Veículo: "Modelo do veículo",
      Loja: "Nome da loja",
      Cidade: "Cidade do atendimento",
      "Data / Hora": "03/01/2024",
      Status: "AGENDADO",
    },
    {
      tipo: "Presencial",
      Veículo: "Modelo do veículo",
      Loja: "Nome da loja",
      Cidade: "Cidade do atendimento",
      "Data / Hora": "03/01/2024",
      Status: "INICIADO",
    },
    {
      tipo: "Domiciliar",
      Veículo: "Modelo do veículo",
      Loja: "Nome da loja",
      Cidade: "Cidade do atendimento",
      "Data / Hora": "03/01/2024",
      Status: "FINALIZADO",
    },
    {
      tipo: "Presencial",
      Veículo: "Modelo do veículo",
      Loja: "Nome da loja",
      Cidade: "Cidade do atendimento",
      "Data / Hora": "03/01/2024",
      Status: "CANCELADO",
    },
  ];

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Title>
          {visao === "atendente" ? "Agendamentos" : "Meus agendamentos"}
        </S.Title>

        {visao === "atendente" ? (
          <S.FormFilter>
            <S.BorderContainer>
              <S.TitleFilter>Filtro</S.TitleFilter>
            </S.BorderContainer>
            <S.Grid gridtemplate="1.5fr 4fr 2fr 4fr" gap="0  24px">
              <S.SubTitle>Data</S.SubTitle>
              <S.SubTitle>Status</S.SubTitle>
              <S.SubTitle>Placa</S.SubTitle>
              <S.SubTitle>Renavam</S.SubTitle>
              <InputDate
                onChange={(e) => ""}
                placeholderText="__/__/__"
                isClearable
              />
              <SimpleSelect
                isClearable
                placeholder=""
                options={statusOptions}
              />
              <InputCustom />
              <InputCustom />
            </S.Grid>
            <S.WrapperBtn>
              <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
            </S.WrapperBtn>
          </S.FormFilter>
        ) : (
          <S.FormFilter>
            <S.BorderContainer>
              <S.TitleFilter>Filtro</S.TitleFilter>
            </S.BorderContainer>
            <S.Grid gridtemplate="2fr 2fr 1.5fr 2fr 2.6fr" gap="0  24px">
              <S.SubTitle>Loja</S.SubTitle>
              <S.SubTitle>Cidade</S.SubTitle>
              <S.SubTitle>Data</S.SubTitle>
              <S.SubTitle>Placa</S.SubTitle>
              <S.SubTitle>Renavam</S.SubTitle>

              <SimpleSelect />
              <SimpleSelect />
              <InputDate onChange={(e) => ""} placeholderText="__/__/__" />
              <InputCustom />
              <InputCustom />
            </S.Grid>

            <S.Grid gridtemplate="10fr 2fr" gap="0 24px">
              <S.SubTitle>Status</S.SubTitle>
              <S.SubTitle></S.SubTitle>
              <SimpleSelect />
              <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
            </S.Grid>
          </S.FormFilter>
        )}

        <S.GridTitles>
          <S.TitleGrid>Tipo</S.TitleGrid>
          <S.TitleGrid>Veículo</S.TitleGrid>
          <S.TitleGrid>Loja</S.TitleGrid>
          <S.TitleGrid>Cidade</S.TitleGrid>
          <S.TitleGrid>Data / Hora</S.TitleGrid>
          <S.TitleGrid>Status</S.TitleGrid>
          <S.TitleGrid></S.TitleGrid>
          <S.TitleGrid></S.TitleGrid>
        </S.GridTitles>
        {dataGrid.map((item) => (
          <S.GridItem key={`${Math.random()}-${item}`}>
            <S.ItemGrid>{item.tipo}</S.ItemGrid>
            <S.ItemGrid>{item.Veículo}</S.ItemGrid>
            <S.ItemGrid>{item.Loja}</S.ItemGrid>
            <S.ItemGrid>{item.Cidade}</S.ItemGrid>
            <S.ItemGrid>{item["Data / Hora"]}</S.ItemGrid>
            <S.ItemGrid>{item.Status}</S.ItemGrid>
            <S.ItemGrid>
              {item.Status === "AGENDADO" && (
                <ButtonCustom typeOfButton="ScheduleList">INICIAR</ButtonCustom>
              )}
            </S.ItemGrid>
            <S.ItemGrid>
              <img
                alt="icone de visualização"
                src="/assets/imgs/visualizar-icon.svg"
                onClick={() => window.open("/detalhe-pagamento", "_self")}
              />{" "}
            </S.ItemGrid>
          </S.GridItem>
        ))}

        <Pagination
          totalPage={11}
          totalRegister={8}
          actualPage={0}
          setNumberPage={() => ""}
        />
      </S.Container>
    </LayoutTemplate>
  );
};
