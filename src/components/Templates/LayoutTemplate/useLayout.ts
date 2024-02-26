import React, { useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextSite } from "../../../context/Context";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();

  function handleLogin() {
    if (token) {
      setModalIsOpen(true);
      return;
    }
    navigate("/agendamento/login");
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
  };
};
