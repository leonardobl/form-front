import React from "react";

import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const SchedulingTemplate = () => {
  const [storage, setStorage] = useSessionStorage("tipoAtendimento");

  function handleClick({ tipoAtendimento }: { tipoAtendimento: string }) {
    const url =
      tipoAtendimento === "loja-fisica"
        ? "loja-fisica"
        : "atendimento-domicilio";

    setStorage(url);

    window.open(`/agendamento/${url}`, "_self");
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
            onClick={() => handleClick({ tipoAtendimento: "loja-fisica" })}
          >
            Loja Física
          </ButtonCustom>
          <ButtonCustom
            typeOfButton="BlueDark"
            onClick={() =>
              handleClick({ tipoAtendimento: "atendimento-domicilio" })
            }
          >
            Domicilio
          </ButtonCustom>
        </S.WrapperButtons>
      </S.Preference>
    </S.Container>
  );
};
