import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";

export const ServiceOptionsTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <p>
          Escolha qual <span>serviço</span> você deseja realizar.
        </p>
        <S.WrapperButtons>
          <ButtonCustom typeOfButton="BlueLight">1° EMPLACAMENTO</ButtonCustom>
          <ButtonCustom typeOfButton="BlueDark">VISTORIA</ButtonCustom>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
