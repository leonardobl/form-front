import React from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/SimpleSelect";

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
        <SimpleSelect isClearable options={opt} />
      </S.Content>
    </S.Container>
  );
};
