import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text/styles";
import { Button } from "../../Atoms/Button";
import { useContextSite } from "../../../context/Context";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";

export const ServicesTemplate = () => {
  const { agendamentoContext, setAgendamentoContext } = useContextSite();

  function handleClick({ servico }: { servico: OpcoesServicosEnum }) {
    setAgendamentoContext({ ...agendamentoContext, servico });
    window.open(`/servicos/${servico.toLowerCase()}`, "_self");
  }

  return (
    <S.Container>
      <Text>
        Escolha qual <span className="textStrong">serviço</span> você deseja
        realizar.
      </Text>

      <S.FlexWrapper>
        <Button
          onClick={() =>
            handleClick({ servico: OpcoesServicosEnum.EMPLACAMENTO })
          }
        >
          1° Emplacamento
        </Button>
        <Button
          onClick={() => handleClick({ servico: OpcoesServicosEnum.VISTORIA })}
        >
          Vistoria
        </Button>
      </S.FlexWrapper>
    </S.Container>
  );
};
