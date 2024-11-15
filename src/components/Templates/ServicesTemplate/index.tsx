import React from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";
import { Link } from "react-router-dom";
import { Text } from "../../Atoms/Text";
import { useServices } from "./useServices";

export const ServicesTemplate = () => {
  const { agendamentoSession, setAgendamentoSession, params } = useServices();

  return (
    <S.Container>
      <Text>
        Escolha qual <span className="textStrong">serviço</span> você deseja
        realizar.
      </Text>

      <S.FlexWrapper>
        <Link
          to={`/agendamento/${params.uuidAgendamento}/servicos/emplacamento`}
        >
          <Button
            onClick={() =>
              setAgendamentoSession({
                ...agendamentoSession,
                servico: OpcoesServicosEnum.EMPLACAMENTO,
              })
            }
          >
            1° Emplacamento
          </Button>
        </Link>
        <Link to={`/agendamento/${params.uuidAgendamento}/servicos/vistoria`}>
          <Button
            onClick={() =>
              setAgendamentoSession({
                ...agendamentoSession,
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
