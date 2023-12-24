import React, { useEffect } from "react";
import * as S from "./styles";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { Link, useLocation } from "react-router-dom";
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
      window.open("/login", "_self");
    }
    window.open("/login-cadastro", "_self");
  }

  return (
    <S.Container>
      <S.header id="home">
        <S.HeaderContent>
          <NavHashLink smooth={true} to={"/"}>
            <img src="assets/imgs/logo-starcheck01.svg" alt="logo starcheck" />
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
                src="assets/imgs/logo-starcheck02.svg"
                alt="logo starcheck"
              />
            </NavHashLink>

            <p>
              Agende uma vistoria conosco hoje mesmo e experimente o
              profissionalismo e a excelência que tornaram a{" "}
              <span>StarCheck</span> a escolha preferida para serviços de
              vistorias de qualidade.
            </p>
          </S.FooterFirstDiv>
          <S.FooterSecondDiv>
            <S.TitleSectionFooter>Serviços</S.TitleSectionFooter>
            <S.TextSectionFooter>Vistoria de Transferência</S.TextSectionFooter>
            <S.SubTextSectionFooter>Posto fixo</S.SubTextSectionFooter>
            <S.TextSectionFooter>Vistoria de Transferência</S.TextSectionFooter>
            <S.SubTextSectionFooter>Posto Domiciliar</S.SubTextSectionFooter>

            <S.TitleSectionFooter>Redes Sociais</S.TitleSectionFooter>
            <S.WrapperSocialIconsFooter>
              <a href="#">
                <img src="assets/imgs/facebook-icon.svg" alt="icone facebook" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="assets/imgs/instagram-icon.svg"
                  alt="icone instagram"
                />
              </a>
              <a href="#">
                <img src="assets/imgs/youtube-icon.svg" alt="icone youtube" />
              </a>
            </S.WrapperSocialIconsFooter>
          </S.FooterSecondDiv>
          <S.FooterThirdDiv>
            <S.TitleSectionFooter>Fale conosco</S.TitleSectionFooter>

            <S.WrapperThirdDivContent>
              <img src="assets/imgs/telefone-icon.svg" alt="icone telefone" />
              <p>
                Calhau <span>(98) 98562-0425</span>
              </p>

              <img src="assets/imgs/telefone-icon.svg" alt="icone telefone" />
              <p>
                Bacabal <span>(99) 99128-2316</span>
              </p>

              <img src="assets/imgs/telefone-icon.svg" alt="icone telefone" />
              <p>
                Balsas <span>(xx) xxxxx-xxxxx</span>
              </p>

              <img src="assets/imgs/email-icon.svg" alt="" />
              <p>vistoriastarcheck@gmail.com</p>
            </S.WrapperThirdDivContent>
            <S.TitleSectionFooter>Localização</S.TitleSectionFooter>
            <p>Calhau São Luís / MA</p>
            <p>Balsas / MA</p>
            <p>Centro Bacabal / MA</p>
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
