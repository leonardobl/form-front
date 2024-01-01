import React, { useEffect } from "react";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [token, setToken] = useSessionStorage("@token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleLoginLogout() {
    if (token) {
      sessionStorage.removeItem("@token");
      sessionStorage.removeItem("tipoAtendimento");

      window.open("/login", "_self");
    }
    window.open("/login-cadastro", "_self");
  }

  return (
    <S.Container>
      <S.header id="home">
        <S.HeaderContent>
          <NavHashLink smooth={true} to={"/"}>
            <img src="/assets/imgs/logo-starcheck01.svg" alt="logo starcheck" />
          </NavHashLink>

          <S.HeaderMenu>
            <NavHashLink
              smooth={true}
              to={pathname !== "/" ? "/#sobre" : "#sobre"}
            >
              Sobre Nós
            </NavHashLink>

            <NavHashLink
              smooth={true}
              to={pathname !== "/" ? "/#servicos" : "#servicos"}
            >
              Serviços
            </NavHashLink>

            <NavHashLink
              smooth={true}
              to={pathname !== "/" ? "/#localizacao" : "#localizacao"}
            >
              Localização
            </NavHashLink>

            <NavHashLink
              smooth={true}
              to={pathname !== "/" ? "/#contato" : "#contato"}
            >
              Contatos
            </NavHashLink>

            <ButtonCustom typeOfButton="Login" onClick={handleLoginLogout}>
              {token ? "Logout" : "Login"}
            </ButtonCustom>
          </S.HeaderMenu>
        </S.HeaderContent>
      </S.header>
      {children}
      <S.Footer>
        <S.FooterContent>
          <S.FooterFirstDiv>
            <NavHashLink to={"/"}>
              <img
                src="/assets/imgs/logo-starcheck02.svg"
                alt="logo starcheck"
              />
            </NavHashLink>
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
                <img
                  src="/assets/imgs/facebook-icon.svg"
                  alt="icone facebook"
                />
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
    </S.Container>
  );
};
