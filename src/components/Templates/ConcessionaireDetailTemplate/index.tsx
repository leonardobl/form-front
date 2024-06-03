import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";

export const ConcessionaireDetailTemplate = () => {
  return (
    <S.Container>
      <S.Form>
        <div>
          <Text>
            Esses são os <span className="textStrong">dados</span> da{" "}
            <span className="textStrong">concessiorária</span>.
          </Text>
        </div>

        <div>
          <Input label="Nome" readOnly />
        </div>

        <div>
          <Input label="CNPJ" readOnly />
        </div>

        <div>
          <Input label="E-mail" readOnly />
        </div>

        <div>
          <Input label="Telefone" readOnly />
        </div>

        <div>
          <Input label="CEP" readOnly />
        </div>

        <div>
          <Input label="Endereço (Rua)" readOnly />
        </div>

        <div>
          <Input label="Número" readOnly />
        </div>

        <div>
          <Input label="Complemento" readOnly />
        </div>

        <div>
          <Input label="Bairro" readOnly />
        </div>

        <div>
          <Input label="UF" readOnly />
        </div>

        <div>
          <Input label="Cidade" readOnly />
        </div>
      </S.Form>
    </S.Container>
  );
};
