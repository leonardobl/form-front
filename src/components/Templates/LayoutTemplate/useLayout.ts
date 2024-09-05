import React, { useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextSite } from "../../../context/Context";
import { cleanStorage } from "../../../utils/cleanStorage";
import { RolesEnum } from "../../../enums/roles";
import { Usuario } from "../../../services/Usuario";

const LINKS = {
  starcheck: "https://starcheck.com.br/",
  log: "https://logvistorias.com.br/",
  vlx: "https://veloxvistorias.com.br/",
  tokyo: "https://tokyovistorias.com.br/",
};

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [usuario] = useSessionStorage("cliente");
  const [token] = useSessionStorage("@token");
  const { pathname } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setIsLoad } = useContextSite();
  const { setTokenContext, tokenContext } = useContextSite();
  const [resources, setResources] = useState<string[]>([]);

  const isCliente = usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const isAdmin = usuario?.roles?.includes(RolesEnum.ROLE_ADMIN);
  const isVistoriador = usuario?.roles?.includes(RolesEnum.ROLE_VISTORIADOR);

  React.useEffect(() => {
    if(usuario)
      Usuario.getRecursosByUuid(usuario?.uuidUsuario)
      .then(({data}) => {
        setResources(data);
      });
  },[usuario]);

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
    setMenuOpen(false);
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
    LINKS,
    isAdmin,
    isVistoriador,
    resources,
  };
};
