import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";

export const SettingsTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Concessionárias Cadastradas</Title>
        <S.Filter>
          <S.FilterTitle>Filtro</S.FilterTitle>
        </S.Filter>
      </S.Container>
    </LayoutTemplate>
  );
};
