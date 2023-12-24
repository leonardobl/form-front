import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";

export const SearchVehicleTemplate = () => {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    toast.success("Veiculo encontrado!");
    setTimeout(() => {
      window.open("/pagamento", "_self");
    }, 3000);
  }

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Buscar Veículo</S.Title>

          <S.Text>
            Digite a <S.TextBlue>placa</S.TextBlue> e{" "}
            <S.TextBlue>renavam</S.TextBlue> do veículo para consultar os dados.
          </S.Text>
          <S.WrapperInputs>
            <InputCustom label="Placa" required />
            <InputCustom label="Renavam" required />
          </S.WrapperInputs>
          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
