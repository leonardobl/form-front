import React, { ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";
import { Button } from "../../Atoms/Button";
import { useLayout } from "./useLayout";
import { MyModal } from "../../Atoms/MyModal";
import { Bar } from "../../Atoms/Bar";
import { NavLink } from "react-router-dom";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const {
    logout,
    menuOpen,
    setMenuOpen,
    token,
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
            {token ? (
              <div>
                <button onClick={() => setModalIsOpen(true)}>Logout</button>
              </div>
            ) : (
              <div>
                <NavLink
                  className={"navLink"}
                  end
                  to={"/agendamento/login-cadastro"}
                >
                  Login
                </NavLink>
              </div>
            )}

            {token && (
              <>
                <div>
                  <NavLink className={"navLink"} to={"/perfil"}>
                    Meu Perfil
                  </NavLink>
                </div>
                <div>
                  <NavLink end className={"navLink"} to={"/meus-agendamentos"}>
                    Agendamentos
                  </NavLink>
                </div>

                <div>
                  <NavLink
                    className={"navLink"}
                    to={isCliente ? "/agendamento" : "/novo-agendamento"}
                  >
                    Novo Agendamento
                  </NavLink>
                </div>
                {!isCliente && (
                  <div>
                    <NavLink
                      className={"navLink"}
                      end
                      to={"/meus-agendamentos/atendimento-loja"}
                    >
                      Atendimento Loja
                    </NavLink>
                  </div>
                )}

                {!isCliente && (
                  <div>
                    <NavLink
                      className={"navLink"}
                      end
                      to={"/meus-agendamentos/deliverys"}
                    >
                      Deliverys
                    </NavLink>
                  </div>
                )}
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
