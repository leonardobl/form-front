import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useVehicle } from "./useVehicle";

export const VehicleTemplate = () => {
  const { handleSubmit, isLoad, form } = useVehicle();

  return (
    <S.Container>
      <Title>Informações do Veículo</Title>

      <S.Form onSubmit={handleSubmit}>
        <S.GridWrapper>
          <div>
            <Input label="Modelo do veículo" readOnly value={form?.modelo} />
          </div>
          <div>
            <Input label="Ano" readOnly value={form?.ano} />
          </div>
          <div>
            <Input label="Placa" readOnly value={form?.placa} />
          </div>

          <div>
            <Input label="Renavam" readOnly value={form?.renavam} />
          </div>
          <div>
            <Input label="Tipo de Veículo" readOnly value={form?.tipo} />
          </div>
          <div>
            <Input label="Chassi" readOnly value={form?.chassi} />
          </div>
        </S.GridWrapper>
        <Button disabled={isLoad}>Confirmar</Button>
      </S.Form>
    </S.Container>
  );
};
