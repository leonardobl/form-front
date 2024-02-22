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
            <S.Label>Modelo do carro</S.Label>
            <Input readOnly value={form?.modelo} />
          </div>
          <div>
            <S.Label>ano</S.Label>
            <Input readOnly value={form?.ano} />
          </div>
          <div>
            <S.Label>Placa</S.Label>
            <Input readOnly value={form?.placa} />
          </div>

          <div>
            <S.Label>rENAVAM</S.Label>
            <Input readOnly value={form?.renavam} />
          </div>
          <div>
            <S.Label>Tipo de veículo</S.Label>
            <Input readOnly value={form?.tipo} />
          </div>
          <div>
            <S.Label>Chassi</S.Label>
            <Input readOnly value={form?.chassi} />
          </div>
        </S.GridWrapper>
        <Button disabled={isLoad}>Confirmar</Button>
      </S.Form>
    </S.Container>
  );
};
