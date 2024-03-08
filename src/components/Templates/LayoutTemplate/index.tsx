import React, { ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Button } from "../../Atoms/Button";
import { useLayout } from "./useLayout";
import { MyModal } from "../../Atoms/MyModal";
import { Bar } from "../../Atoms/Bar";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const {
    handleLogin,
    logout,
    menuOpen,
    setMenuOpen,
    tokenContext,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
  } = useLayout();

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
                {tokenContext ? "Logout" : "Login"}
              </button>
            </div>

            {tokenContext && (
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
                  <button
                    onClick={() =>
                      navigate(isCliente ? "/agendamento" : "/novo-agendamento")
                    }
                  >
                    Novo Agendamento
                  </button>
                </div>
              </>
            )}
          </S.WrapperButton>
        </S.MainMenu>
      </S.WrapperMainMenu>

      <S.WrapperMain>
        <Bar>
          <S.WrapperIconsBar>
            <S.IconMenuHamburguer
              src="/assets/svgs/menuHamburguer.svg"
              alt="icone do menu hamburguer"
              onClick={() => setMenuOpen(true)}
            />
            <S.IconLogo
              src={`/assets/svgs/logo-${process.env.REACT_APP_PROJECT}.svg`}
              alt="logo empresa"
            />
            <S.IconHome
              src="/assets/svgs/icone-home.svg"
              alt="icone home"
              onClick={() => navigate("/")}
            />
          </S.WrapperIconsBar>
        </Bar>
        <S.Wrapper>
          <S.Main>
            {props.children}
            <Outlet />
          </S.Main>
          <S.IconMap src="/assets/svgs/paguexlogo.svg" alt="icone mapa" />
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
