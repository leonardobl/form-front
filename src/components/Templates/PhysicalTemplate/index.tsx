import React from "react";
import * as S from "./styles";
import { Select, TextField } from "@mui/material";

export const PhysicalTemplate = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Loja Física</S.Title>
        <Select label="meu teste" required />
        <TextField required label="Teste" />
      </S.Content>
    </S.Container>
  );
};
