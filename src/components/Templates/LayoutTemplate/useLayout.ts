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
  const [token] = useSessionStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();
  const { setTokenContext, tokenContext } = useContextSite();

  const isCliente = agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE);

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
    logout,
    menuOpen,
    setMenuOpen,
    token,
    modalIsOpen,
    navigate,
    setModalIsOpen,
    isCliente,
  };
};
