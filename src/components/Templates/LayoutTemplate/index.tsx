import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useLocation, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { cleanStorage } from "../../../utils/cleanStorage";
import { RolesEnum } from "../../../enums/roles";
import { MenuMobile } from "../../Atoms/MenuMobile";

export const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [token, setToken] = useSessionStorage("@token");
  const [cliente, setCliente] = useSessionStorage("cliente");

  const [agendamento, setAgendamento] = useSessionStorage("agendamento");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isCliente = !!(
    cliente?.role?.includes(RolesEnum.ROLE_CLIENTE) && token
  );
  const isOffline = pathname.includes("offline");

  const isAdmGerente = cliente?.role?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN || regra === RolesEnum.ROLE_GERENTE
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleLoginLogout() {
    if (token) {
      sessionStorage.removeItem("@token");
      cleanStorage();
      window.open("/", "_self");
      return;
    }

    window.open("/login-cadastro", "_self");
  }

  return (
    <S.Container>
      <S.header id="home">
        {menuIsOpen && <MenuMobile handleOnChange={setMenuIsOpen} />}
        <S.HeaderContent data-hidden={isOffline}>
          {isOffline ? (
            <S.Logo
              src="/assets/imgs/logo-starcheck01.svg"
              alt="logo starcheck"
            />
          ) : (
            <NavHashLink smooth={true} to={"/"}>
              <S.Logo
                src="/assets/imgs/logo-starcheck01.svg"
                alt="logo starcheck"
              />
            </NavHashLink>
          )}

          <S.HeaderMenu data-hidden={isOffline}>
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
          </S.HeaderMenu>
          <S.WrapperButtons data-hidden={isOffline}>
            {isCliente && (
              <Link to={"/meus-agendamentos"}>
                <S.ButtonMySchedule>Meus Agendamentos</S.ButtonMySchedule>
              </Link>
            )}

            {isAdmGerente && (
              <Link to={"/meus-agendamentos"}>
                <S.ButtonMySchedule>Agendamentos</S.ButtonMySchedule>
              </Link>
            )}
            <S.ButtonLogin onClick={handleLoginLogout}>
              {token ? "Logout" : "Login"}
            </S.ButtonLogin>
          </S.WrapperButtons>

          {!isOffline && (
            <S.MenuMobile
              src="/assets/imgs/hamburguer.svg"
              alt="icone de menu hamburguer"
              onClick={() => setMenuIsOpen(true)}
            />
          )}
        </S.HeaderContent>
      </S.header>
      {children}
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
