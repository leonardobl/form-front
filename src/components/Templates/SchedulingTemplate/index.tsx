import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { ButtonHome } from "../../Atoms/ButtonHome";

export const SchedulingTemplate = () => {
  return (
    <LayoutTemplate>
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
            <ButtonHome>Loja Física</ButtonHome>
            <ButtonHome>Domicilio</ButtonHome>
          </S.WrapperButtons>
        </S.Preference>
      </S.Container>
    </LayoutTemplate>
  );
};
