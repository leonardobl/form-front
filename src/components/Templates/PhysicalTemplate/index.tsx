import React, { useState } from "react";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";

export const PhysicalTemplate = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Loja Física</S.Title>
      </S.Content>
      <InputDate onChange={(e) => ""} monthsShown={2} />
    </S.Container>
  );
};
