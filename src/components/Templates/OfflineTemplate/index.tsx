import React from "react";
import * as S from "./styles";
import { Bar } from "../../Atoms/Bar";

export const OfflineTemplate = () => {
  return (
    <S.Container>
      <Bar>
        <S.WrapperImgs>
          <S.LogoImg src="/assets/svgs/logo-starcheck.svg" alt="logo empresa" />
        </S.WrapperImgs>
      </Bar>
      <S.Main>
        <S.IconDanger
          src="/assets/svgs/icon-danger.svg"
          alt="icone de atenção"
        />

        <S.Title>SISTEMA EM MANUTENÇÃO</S.Title>

        <S.Text>
          Direcione-se até a ECV ou CIRETRAN mais próxima para realização do seu
          serviço.
        </S.Text>

        <S.Contact>CONTATOS</S.Contact>

        <S.PhoneNumer>(98) 9.8426-1887</S.PhoneNumer>
      </S.Main>
      <S.LogoMapa src="/assets/svgs/paguexlogo.svg" alt="logo mapa" />
    </S.Container>
  );
};
