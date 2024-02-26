import React, { ComponentProps, useEffect, useState } from "react";
import * as S from "./styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { CustomConfirmModal } from "../../Atoms/CustomConfirmModal";
import { Button } from "../../Atoms/Button";
import { useContextSite } from "../../../context/Context";

interface LayoutTemplateProps extends ComponentProps<"div"> {
  children?: React.ReactNode;
}

export const LayoutTemplate = (props: LayoutTemplateProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleLogin() {
    if (token) {
      setModalIsOpen(true);
      return;
    }
    navigate("/login");
  }

  function logout() {
    setIsLoad(true);
    setModalIsOpen(false);

    setTimeout(() => {
      sessionStorage.removeItem("@token");
      setIsLoad(false);
      navigate("/");
    }, 2000);
  }

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
            <div>
              <button>Meu Perfil</button>
            </div>
            <div>
              <button>Agendamentos</button>
            </div>
            <div>
              <button>Novo Agendamento</button>
            </div>
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
      <CustomConfirmModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <S.ModalContent>
          <p>Tem certeza que deseja fazer logout ?</p>
          <Button data-variant-dark onClick={logout}>
            CONFIRMAR
          </Button>
        </S.ModalContent>
      </CustomConfirmModal>
    </S.Container>
  );
};
