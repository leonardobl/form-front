import React from "react";

import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const SchedulingTemplate = () => {
  const [session, setSession] = useSessionStorage("tipoAtendimento");

  function handleClick({ tipoAtendimento }: { tipoAtendimento: string }) {
    setSession(tipoAtendimento);
    window.open(`/agendamento/${tipoAtendimento.toLowerCase()}`, "_self");
  }

  return (
    <S.Container>
      <S.Banner>
        <S.BannerLeftSide>
          <S.BannerLeftSideContent>
            <h1>
              Agende sua <br /> vistoria veicular
            </h1>

            <p>
              Agende sua vistoria de <S.TitleBlue>forma rápida</S.TitleBlue> e
              <S.TitleBlue> fácil.</S.TitleBlue> Não perca tempo e garanta sua
              segurança!
            </p>
          </S.BannerLeftSideContent>
        </S.BannerLeftSide>
        <S.BannerRightSide></S.BannerRightSide>
      </S.Banner>
      <S.Preference>
        <p>
          Escolha onde você deseja executar sua vistoria veicular, na{" "}
          <S.TitleBlue>loja física</S.TitleBlue> ou em{" "}
          <S.TitleBlue>endereço de sua preferência.</S.TitleBlue>
        </p>

        <S.WrapperButtons>
          <ButtonCustom
            typeOfButton="BlueLight"
            onClick={() => handleClick({ tipoAtendimento: "LOJA" })}
          >
            Loja Física
          </ButtonCustom>
          <ButtonCustom
            typeOfButton="BlueDark"
            onClick={() => handleClick({ tipoAtendimento: "DOMICILIO" })}
          >
            Domicilio
          </ButtonCustom>
        </S.WrapperButtons>
      </S.Preference>
    </S.Container>
  );
};
