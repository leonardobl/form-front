import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Input } from "../../Atoms/Inputs/Input";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";

const teste = [
  { value: "teste1", label: "Teste1" },
  { value: "teste2", label: "Teste2" },
  { value: "teste3", label: "Teste3" },
  { value: "teste4", label: "Teste4" },
];

export const HomeTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <div>HomeTemplate</div>
        <br />
        <br />
        <S.Wrapper>
          <div>
            <InputDate label="data" required onChange={() => ""} />
          </div>
          <div>
            <Input required label="Nome" type="password" />
          </div>
        </S.Wrapper>
        <Button disabled>Click</Button>
      </S.Container>
    </LayoutTemplate>
  );
};
