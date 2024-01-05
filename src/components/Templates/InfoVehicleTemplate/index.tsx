import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const InfoVehicleTemplate = () => {
  const [agendamento, setAgendamento] = useSessionStorage("agendamento");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (agendamento.tipoAtendimento === "LOJA") {
      window.open(`/pagamento`, "_self");
      return;
    }
    window.open("/cadastro-endereco", "_self");
  }

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <h1>Informações do veículo</h1>
          <S.Form onSubmit={handleSubmit}>
            <S.Grid>
              <S.TitleItemGrid>Modelo do carro</S.TitleItemGrid>
              <S.TitleItemGrid>Ano</S.TitleItemGrid>
              <S.TitleItemGrid>Placa</S.TitleItemGrid>
              <InputCustom readOnly />
              <InputCustom readOnly />
              <InputCustom readOnly />
            </S.Grid>
            <S.Grid>
              <S.TitleItemGrid>Chassi</S.TitleItemGrid>
              <S.TitleItemGrid>Renavam</S.TitleItemGrid>
              <S.TitleItemGrid>Tipo de veículo</S.TitleItemGrid>
              <InputCustom readOnly />
              <InputCustom readOnly />
              <InputCustom readOnly />
            </S.Grid>
            <S.WrapperBtn>
              <ButtonCustom typeOfButton="BlueLight">Confirmar</ButtonCustom>
            </S.WrapperBtn>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
