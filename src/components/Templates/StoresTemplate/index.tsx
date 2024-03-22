import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { useStores } from "./useStores";
import { ButtonDots } from "../../Atoms/ButtonDots";

export const StoresTemplate = () => {
  const { data, iniciarVistoria } = useStores();

  return (
    <S.Container>
      <Title>Atendimento Loja</Title>

      {data.map((item) => (
        <S.Wrapper key={Math.random()}>
          <S.GridHeader>
            <p>{item.horaAgendada}</p>
            <div></div>
          </S.GridHeader>
          <S.GridBody>
            <div></div>
            <S.Body>
              <S.HeaderBody>
                <h4>Cliente</h4>
                <h4>Veículo</h4>
                <h4>Placa</h4>
                <h4>Chassi</h4>
                <span></span>
              </S.HeaderBody>
              {item.agendamento.map((_) => (
                <S.BodyItem key={Math.random()}>
                  <p>{_?.cliente?.nome || "---"}</p>
                  <p>{_?.veiculo?.modelo || "---"}</p>
                  <p>{_?.veiculo?.placa || "---"}</p>
                  <p>{_?.veiculo?.chassi || "---"}</p>
                  <S.WrapperActions>
                    <S.Eye
                      data-color-starcheck={
                        process.env.REACT_APP_PROJECT === "starcheck"
                      }
                      data-color-log={process.env.REACT_APP_PROJECT === "log"}
                      data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
                      data-color-tokyo={
                        process.env.REACT_APP_PROJECT === "tokyo"
                      }
                      onClick={() =>
                        window.open(
                          `/meus-agendamentos/agendamento?id=${_.uuid}`,
                          "_blank"
                        )
                      }
                      src="/assets/svgs/eye.svg"
                      alt="olho"
                    />
                    <ButtonDots
                      handleSleep={() => ""}
                      handleStart={() => iniciarVistoria(_.uuid)}
                    />
                  </S.WrapperActions>
                </S.BodyItem>
              ))}
            </S.Body>
          </S.GridBody>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};
