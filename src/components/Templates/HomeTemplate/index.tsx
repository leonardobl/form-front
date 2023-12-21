import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { ButtonHome } from "../../Atoms/ButtonHome";

export const HomeTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.SectioStarCheck>
          <S.SectioStarCheckLeftSide>
            <S.SectioStarCheckLeftSideWrapper>
              <h1>
                Star{" "}
                <span>
                  Check{" "}
                  <img src="assets/imgs/check-icon.svg" alt="icone check" />
                </span>
              </h1>

              <p>
                Bem-vindo à StarCheck, sua empresa de Vistoria Veicular,
                especializada em fornecer análises precisas e fornecidas do seu
                veículo, garantindo segurança e complementos.
                <span>Vistoria Veicularh</span>
              </p>
              <ButtonHome>AGENDAR VISTORIA</ButtonHome>
            </S.SectioStarCheckLeftSideWrapper>
          </S.SectioStarCheckLeftSide>
          <S.SectioStarCheckRightSide>
            <S.SectioStarCheckRightSideWrapper>
              <img src="assets/imgs/Rectangle.png" alt="foto mecanico" />
            </S.SectioStarCheckRightSideWrapper>
          </S.SectioStarCheckRightSide>
        </S.SectioStarCheck>
      </S.Container>
    </LayoutTemplate>
  );
};
