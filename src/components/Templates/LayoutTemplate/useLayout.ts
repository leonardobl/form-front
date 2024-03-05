import React, { useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { cleanStorage } from "../../../utils/cleanStorage";
import { RolesEnum } from "../../../enums/roles";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const [agendamentoSession] = useSessionStorage("agendamentoSession");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();

  const isCliente = agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE);

  function handleLogin() {
    if (token) {
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
      setIsLoad(false);
      window.open("/", "_self");
    }, 1000);
  }
  return {
    handleLogin,
    logout,
    pathname,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
  };
};
