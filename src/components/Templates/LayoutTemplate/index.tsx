import React, { ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Button } from "../../Atoms/Button";
import { useLayout } from "./useLayout";
import { MyModal } from "../../Atoms/MyModal";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const {
    handleLogin,
    logout,
    pathname,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
  } = useLayout();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

          <S.WrapperButton>
            <div>
              <button onClick={handleLogin}>
                {token ? "Logout" : "Login"}
              </button>
            </div>

            {token && (
              <>
                <div>
                  <button onClick={() => navigate("/perfil")}>
                    Meu Perfil
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate("/meus-agendamentos")}>
                    Agendamentos
                  </button>
                </div>
                <div>
                  <button onClick={() => navigate("/novo-agendamento")}>
                    Novo Agendamento
                  </button>
                </div>
              </>
            )}
          </S.WrapperButton>
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
      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <S.ModalContent>
          <p>Tem certeza que deseja fazer logout ?</p>
          <Button data-variant-dark onClick={logout}>
            CONFIRMAR
          </Button>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
