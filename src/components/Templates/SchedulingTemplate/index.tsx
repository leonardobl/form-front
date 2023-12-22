import React from "react";

import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link } from "react-router-dom";

export const SchedulingTemplate = () => {
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
          <Link to={"loja-fisica"}>
            <ButtonCustom typeOfButton="BlueLight">Loja Física</ButtonCustom>
          </Link>
          <ButtonCustom typeOfButton="BlueLight">Domicilio</ButtonCustom>
        </S.WrapperButtons>
      </S.Preference>
    </S.Container>
  );
};
