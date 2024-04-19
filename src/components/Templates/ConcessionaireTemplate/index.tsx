import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const ConcessionaireTemplate = () => {
  return (
    <S.Container>
      <Title> Cadastro Concessionárias</Title>

      <S.Form>
        <div>
          <Input label="Nome" required />
        </div>

        <div>
          <Input label="CNPJ" required />
        </div>

        <div>
          <Input label="E-mail" required />
        </div>

        <div>
          <Input label="Telefone" required />
        </div>

        <div>
          <Input label="CEP" required />
        </div>

        <div>
          <Input label="Endereço (Rua)" required />
        </div>

        <div>
          <Input label="Número" required />
        </div>

        <div>
          <Input label="Complemento" required />
        </div>

        <div>
          <Input label="Bairro" required />
        </div>

        <div>
          <SimpleSelect label="UF" required />
        </div>

        <div>
          <SimpleSelect label="Cidade" required />
        </div>

        <div>
          <Button>Cadastrar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
