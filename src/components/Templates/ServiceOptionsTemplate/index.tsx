import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
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
          <Button onClick={() => handleClick("Emplacamento")}>
            1° EMPLACAMENTO
          </Button>
          <Button data-variant-dark onClick={() => handleClick("Vistoria")}>
            VISTORIA
          </Button>
        </S.WrapperButtons>
      </S.Container>
    </LayoutTemplate>
  );
};
