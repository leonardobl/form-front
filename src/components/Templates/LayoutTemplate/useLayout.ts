import React, { useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { cleanStorage } from "../../../utils/cleanStorage";
import { RolesEnum } from "../../../enums/roles";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [agendamentoSession] = useSessionStorage("agendamentoSession");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();
  const { setTokenContext, tokenContext } = useContextSite();

  const isCliente = agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE);

  function handleLogin() {
    if (setTokenContext) {
      setModalIsOpen(true);
      return;
    }
    navigate("/agendamento/login-cadastro");
  }

  function logout() {
    setIsLoad(true);
    setModalIsOpen(false);

    setTimeout(() => {
      cleanStorage();
      setTokenContext("");
      setIsLoad(false);
      window.open("/", "_self");
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return {
    handleLogin,
    logout,
    menuOpen,
    setMenuOpen,
    tokenContext,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
  };
};
