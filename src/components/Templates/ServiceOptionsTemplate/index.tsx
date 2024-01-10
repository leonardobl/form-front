import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const ServiceOptionsTemplate = () => {
  const [storage, setStorage] = useSessionStorage("servico");

  function handleClick(tipoServico: string) {
    setStorage(tipoServico);
    window.open("/buscar-veiculo", "_self");
  }

  return (
    <LayoutTemplate>
      <S.Container>
        <p>
          Escolha qual <span>serviço</span> você deseja realizar.
        </p>
        <S.WrapperButtons>
          <ButtonCustom
            typeOfButton="BlueLight"
            onClick={() => handleClick("Emplacamento")}
          >
            1° EMPLACAMENTO
          </ButtonCustom>
          <ButtonCustom
            typeOfButton="BlueDark"
            onClick={() => handleClick("Vistoria")}
          >
            VISTORIA
          </ButtonCustom>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
