import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const SettingsTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <Title>Concessionárias Cadastradas</Title>
        <S.Filter>
          <S.FilterTitle>Filtro</S.FilterTitle>
          <S.FilterContent>
            <div>
              <Input label="Nome" />
            </div>
            <div>
              <Input label="CNPJ" />
            </div>

            <div>
              <SimpleSelect />
            </div>

            <div>
              <button>Limpar tudo</button>
            </div>

            <div>
              <Button>BUSCAR</Button>
            </div>
          </S.FilterContent>
        </S.Filter>
      </S.Container>
    </LayoutTemplate>
  );
};
