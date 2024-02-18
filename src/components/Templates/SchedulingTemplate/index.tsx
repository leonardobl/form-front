import React, { useEffect } from "react";

import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useSearchParams } from "react-router-dom";

export const SchedulingTemplate = () => {
  const [session, setSession] = useSessionStorage("tipoAtendimento");

  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick({ tipoAtendimento }: { tipoAtendimento: string }) {
    setSession(tipoAtendimento);
    window.open(`/agendamento/${tipoAtendimento.toLowerCase()}`, "_self");
  }

  useEffect(() => {
    console.log(searchParams.get("projeto"));
  }, [searchParams]);

  return (
    <S.Container>
      <S.Banner>
        <S.BannerLeftSide>
          <S.BannerLeftSideContent>
            <h1>
              Agende sua <br /> vistoria veicular
            </h1>

            <p>
              Escolha onde você deseja executar sua vistoria veicular, na{" "}
              <S.TitleBlue>loja física</S.TitleBlue> ou em{" "}
              <S.TitleBlue>endereço de sua preferência</S.TitleBlue>.
            </p>
            <S.WrapperButtons>
              <div>
                <Button
                  onClick={() => handleClick({ tipoAtendimento: "LOJA" })}
                >
                  Loja Física
                </Button>
              </div>
              <div>
                <Button
                  data-variant-login
                  onClick={() => handleClick({ tipoAtendimento: "DOMICILIO" })}
                >
                  DOMICÍLIO
                </Button>
              </div>
            </S.WrapperButtons>
          </S.BannerLeftSideContent>
        </S.BannerLeftSide>
        <S.BannerRightSide></S.BannerRightSide>
      </S.Banner>
    </S.Container>
  );
};
