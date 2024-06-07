import React from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";

export const AcceptInspectionTemplate = () => {
  return (
    <S.Container>
      <S.Form>
        <div>
          <Input readOnly label="Nome" />
        </div>
        <div>
          <Input readOnly label="Telefone" />
        </div>
        <div>
          <Input readOnly label="CEP" />
        </div>
        <div>
          <Input readOnly label="Endereço (Rua)" />
        </div>
        <div>
          <Input readOnly label="Número" />
        </div>
        <div>
          <Input readOnly label="Complemento" />
        </div>
        <div>
          <Input readOnly label="Bairro" />
        </div>
        <div>
          <Input readOnly label="UF" />
        </div>
        <div>
          <Input readOnly label="Cidade" />
        </div>
        <div>
          <Input readOnly label="Modelo do Carro" />
        </div>
        <div>
          <Input readOnly label="Tipo de Veículo" />
        </div>
        <div>
          <Input readOnly label="Ano" />
        </div>
        <div>
          <Input readOnly label="Placa" />
        </div>
        <div>
          <Input readOnly label="Renavam" />
        </div>
        <div>
          <Input readOnly label="Chassi" />
        </div>
        <div>
          <Button>Aceite</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
