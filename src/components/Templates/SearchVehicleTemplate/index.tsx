import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { toast } from "react-toastify";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useContextSite } from "../../../context/Context";

export const SearchVehicleTemplate = () => {
  const [serviceStorage, setServiceStorage] = useSessionStorage("service");
  const [atendimentoStorage, setAtendimentoStorage] =
    useSessionStorage("tipoAtendimento");
  const [service, setService] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (atendimentoStorage === "loja") {
      return window.open("/pagamento", "_self");
    }

    return window.open("/cadastro-endereco", "_self");
  }

  useEffect(() => {
    setService(serviceStorage);
  }, []);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Buscar Veículo</S.Title>

          <S.Text>
            Digite a{" "}
            <S.TextBlue>
              {service === "1Emplacamento" ? "chassi" : "placa"}
            </S.TextBlue>{" "}
            e <S.TextBlue>renavam</S.TextBlue> do veículo para consultar os
            dados.
          </S.Text>
          <S.WrapperInputs>
            <InputCustom
              type={service === "1Emplacamento" ? "number" : "text"}
              label={service === "1Emplacamento" ? "Chassi" : "Placa"}
              required
            />
            <InputCustom label="Renavam" required type="number" />
          </S.WrapperInputs>
          <S.WrapperButton>
            <ButtonCustom typeOfButton="BlueLight">Buscar</ButtonCustom>
          </S.WrapperButton>
        </S.Form>
      </S.Container>
    </LayoutTemplate>
  );
};
