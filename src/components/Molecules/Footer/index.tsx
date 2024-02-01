import React from "react";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContent>
        <S.FooterFirstDiv>
          <img src="/assets/imgs/logo-starcheck02.svg" alt="logo starcheck" />
        </S.FooterFirstDiv>
        <S.FooterSecondDiv>
          <S.TitleSectionFooter>Fale conosco</S.TitleSectionFooter>
          <div>
            <img src="/assets/imgs/email-icon.svg" alt="" />
            <p>vistoriastarcheck@gmail.com</p>
          </div>
        </S.FooterSecondDiv>
        <S.FooterThirdDiv>
          <S.TitleSectionFooter>Redes Sociais</S.TitleSectionFooter>

          <S.WrapperSocialIconsFooter>
            <a href="#">
              <img src="/assets/imgs/facebook-icon.svg" alt="icone facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/imgs/instagram-icon.svg"
                alt="icone instagram"
              />
            </a>
            <a href="#">
              <img src="/assets/imgs/youtube-icon.svg" alt="icone youtube" />
            </a>
          </S.WrapperSocialIconsFooter>
        </S.FooterThirdDiv>
      </S.FooterContent>
      <S.FooterBar>
        <S.FooterBarContent>
          <h3>Direitos Autorais © 2023 StarCheck</h3>
          <h3>
            Termos de Uso <span>|</span> Política de Privacidade
          </h3>
        </S.FooterBarContent>
      </S.FooterBar>
    </S.Footer>
  );
};
