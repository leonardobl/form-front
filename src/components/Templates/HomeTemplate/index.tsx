import React, { useEffect } from "react";
import * as S from "./styles";
import { useHome } from "./useHome";

export const HomeTemplate = () => {
  const { navigate, Project, isCliente, isAdmin, isVistoriador, token } =
    useHome();

  return (
    <S.Container>
      <p className="text">
        Escolha onde você <b>deseja executar sua vistoria veicular:</b>
      </p>

      <S.FlexWrapper
        data-project-starcheck={Project === "starcheck"}
        data-project-log={Project === "log"}
        data-project-vlx={Project === "vlx"}
        data-project-tokyo={Project === "tokyo"}
      >
        <S.Card>
          <h2>Loja / Ciretran</h2>

          <S.CardContent>
            <div>
              <p>
                Realize sua vistoria <b>veicular na unidade mais próxima.</b>{" "}
                Nas nossas lojas e nas Ciretrans, você encontra:
              </p>
            </div>
            <div>
              <ul>
                <li>
                  Equipe técnica e completa para realização do seu{" "}
                  <b>serviço de forma rápida;</b>
                </li>
                <li> Ampla sala de espera.</li>
              </ul>
            </div>
            <div>
              <p>
                Realize seu agendamento e{" "}
                <b>compareça no local, data e hora marcada.</b>
                Consulte na Home do nosso site os endereços.
              </p>
            </div>
          </S.CardContent>
          <div>
            <button
              onClick={() => {
                navigate(
                  !isCliente ? "/novo-agendamento" : "/agendamento/loja"
                );
              }}
            >
              Avançar
            </button>
          </div>
        </S.Card>
        <S.Card>
          <h2>Delivery</h2>

          <S.CardContent>
            <div>
              <p>
                Você escolhe o <b>local que preferir</b> e a gente realiza a
                vistoria:
              </p>
            </div>
            <div>
              <ul>
                <li>
                  <b>No conforto do seu lar:</b> Receba o nosso profissional em
                  sua casa, sem precisar se preocupar com trânsito ou
                  estacionamento.
                </li>
                <li>
                  {" "}
                  <b>Na praticidade da concessionária:</b> Combine a vistoria no
                  pátio da concessionária antes de retirar o veículo.
                </li>
              </ul>
            </div>
          </S.CardContent>
          <div>
            <button
              onClick={() => {
                navigate(
                  !isCliente ? "/novo-agendamento" : "/agendamento/domicilio"
                );
              }}
            >
              Avançar
            </button>
          </div>
        </S.Card>

        {token && !isCliente && (
          <S.Card>
            <h2>Itinerante</h2>

            <S.CardContent>
              <div>
                <p>
                  Sua cidade ainda não tem <b>(Empresa)? Sem problemas!</b>
                </p>
              </div>

              <div>
                <p>
                  <b>Confira as próximas viagens programadas</b> para sua cidade
                  e garanta já a sua vistoria!
                </p>
              </div>
              <div>
                <p>
                  As <b>vagas são limitadas</b>, então não perca tempo!
                </p>
              </div>
            </S.CardContent>
            <div>
              <button
                onClick={() => {
                  navigate("/agendamento/servicos");
                }}
              >
                Avançar
              </button>
            </div>
          </S.Card>
        )}
      </S.FlexWrapper>
    </S.Container>
  );
};
