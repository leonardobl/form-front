import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";

const opt = [
  {
    value: "Leonardo",
    label: "Leonardo",
  },
  {
    value: "Lima",
    label: "Lima",
  },
];

export const PhysicalTemplate = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Loja Física</S.Title>
        <AsyncSimpleSelect label="Teste" required />
      </S.Content>
    </S.Container>
  );
};
