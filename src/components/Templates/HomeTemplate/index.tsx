import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

const teste = [
  { value: "teste1", label: "Teste1" },
  { value: "teste2", label: "Teste2" },
  { value: "teste3", label: "Teste3" },
  { value: "teste4", label: "Teste4" },
];

export const HomeTemplate = () => {
  return (
    <LayoutTemplate>
      <div>HomeTemplate</div>
      <br />
      <SimpleSelect options={teste} label="Loja" />
    </LayoutTemplate>
  );
};
