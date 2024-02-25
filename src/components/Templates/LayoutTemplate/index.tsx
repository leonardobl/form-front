import React, { ComponentProps, useState } from "react";
import * as S from "./styles";
import { Outlet, useNavigate } from "react-router-dom";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Container {...props}>
      <S.WrapperMainMenu>
        <S.MainMenu data-open={menuOpen}>
          <S.WrapperIconCloseMainMenu>
            <S.IconCloseMainMenu
              src="/assets/svgs/arrow-left.svg"
              alt="icone close menu"
              onClick={() => setMenuOpen(false)}
            />
          </S.WrapperIconCloseMainMenu>

          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </S.MainMenu>
      </S.WrapperMainMenu>

      <S.WrapperMain>
        <S.Bar>
          <S.IconMenuHamburguer
            src="/assets/svgs/menuHamburguer.svg"
            alt="icone do menu hamburguer"
            onClick={() => setMenuOpen(true)}
          />
          <S.WrapperIconsBar>
            <S.IconLogo
              src="/assets/svgs/logo-starcheck.svg"
              alt="logo empresa"
            />
            <S.IconHome
              src="/assets/svgs/icone-home.svg"
              alt="icone home"
              onClick={() => navigate("/")}
            />
          </S.WrapperIconsBar>
        </S.Bar>
        <S.Wrapper>
          <S.Main>
            {props.children}
            <Outlet />
          </S.Main>
          <S.IconMap src="/assets/svgs/logo-mapa.svg" alt="icone mapa" />
        </S.Wrapper>
      </S.WrapperMain>
    </S.Container>
  );
};
