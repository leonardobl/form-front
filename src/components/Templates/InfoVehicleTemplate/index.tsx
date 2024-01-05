import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

export const InfoVehicleTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <h1>Informações do veículo</h1>
          <S.Form>
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
