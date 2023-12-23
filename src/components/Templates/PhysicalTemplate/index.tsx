import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

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
        <SimpleSelect required isClearable options={opt} label="Required" />
      </S.Content>
    </S.Container>
  );
};
