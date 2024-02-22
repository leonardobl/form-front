import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text/styles";
import { Button } from "../../Atoms/Button";
import { useContextSite } from "../../../context/Context";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";
import { Link } from "react-router-dom";

export const ServicesTemplate = () => {
  const { agendamentoContext, setAgendamentoContext } = useContextSite();

  return (
    <S.Container>
      <Text>
        Escolha qual <span className="textStrong">serviço</span> você deseja
        realizar.
      </Text>

      <S.FlexWrapper>
        <Link to={"/servicos/emplacamento"}>
          <Button
            onClick={() =>
              setAgendamentoContext({
                ...agendamentoContext,
                servico: OpcoesServicosEnum.EMPLACAMENTO,
              })
            }
          >
            1° Emplacamento
          </Button>
        </Link>
        <Link to={"/servicos/vistoria"}>
          <Button
            onClick={() =>
              setAgendamentoContext({
                ...agendamentoContext,
                servico: OpcoesServicosEnum.VISTORIA,
              })
            }
          >
            Vistoria
          </Button>
        </Link>
      </S.FlexWrapper>
    </S.Container>
  );
};
