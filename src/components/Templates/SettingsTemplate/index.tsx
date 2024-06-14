import React from "react";
import * as S from "./styles";
import { useSettings } from "./useSettings";
import { LayoutTemplate } from "../LayoutTemplate";

export const SettingsTemplate = () => {
  const { navigate } = useSettings();
  return (
    <LayoutTemplate>
      <S.Container>
        <S.WrapperCards>
          <S.Card onClick={() => navigate("/configuracoes/concessionarias")}>
            <p>Cadastro de Concessionárias</p>
          </S.Card>
        </S.WrapperCards>
      </S.Container>
    </LayoutTemplate>
  );
};
