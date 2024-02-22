import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const AddressRegistrationTemplate = () => {
  return (
    <S.Container>
      <Title>Endereço de Realização do Serviço</Title>

      <S.Form>
        <S.GridWrapper>
          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <Input />
          </div>

          <div>
            <SimpleSelect />
          </div>

          <div>
            <SimpleSelect />
          </div>

          <div>
            <Button>Cadastrar Serviço</Button>
          </div>
        </S.GridWrapper>
      </S.Form>
    </S.Container>
  );
};
