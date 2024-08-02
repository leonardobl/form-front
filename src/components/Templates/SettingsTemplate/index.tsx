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
          <S.Card onClick={() => navigate("/configuracoes/lojas")}>
            <p>Lojas</p>
          </S.Card>

          <S.Card onClick={() => navigate("/configuracoes/concessionarias")}>
            <p>Concessionárias</p>
          </S.Card>

          <S.Card onClick={() => navigate("/configuracoes/feriados")}>
            <p>Feriados</p>
          </S.Card>

          <S.Card onClick={() => navigate("/configuracoes/itinerantes")}>
            <p>Itinerantes</p>
          </S.Card>
        </S.WrapperCards>
      </S.Container>
    </LayoutTemplate>
  );
};
