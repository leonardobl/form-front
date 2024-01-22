import React, { ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { IoClose } from "react-icons/io5";
import { RolesEnum } from "../../../enums/roles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

interface MenuMobileProps {
  handleOnChange: (e: boolean) => void;
}

export const MenuMobile = ({ handleOnChange }: MenuMobileProps) => {
  const { pathname } = useLocation();
  const [cliente, setCliente] = useSessionStorage("cliente");
  const [token, setToken] = useSessionStorage("@token");

  const isCliente = !!(
    cliente?.role?.includes(RolesEnum.ROLE_CLIENTE) && token
  );

  const isAdmGerente = cliente?.role?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN || regra === RolesEnum.ROLE_GERENTE
  );

  function handleClose() {
    handleOnChange(false);
  }
  return (
    <S.Container>
      <S.WrapperIcons>
        <S.Logo src="/assets/imgs/logo-starcheck01.svg" alt="icone logo" />
        <IoClose size={30} onClick={() => handleOnChange(false)} />
      </S.WrapperIcons>
      <S.Ul>
        <li>
          <NavHashLink
            onClick={handleClose}
            smooth={true}
            to={"/login-cadastro"}
          >
            Login
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={handleClose}
            smooth={true}
            to={pathname !== "/" ? "/#sobre" : "#sobre"}
          >
            Sobre Nós
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={handleClose}
            smooth={true}
            to={pathname !== "/" ? "/#servicos" : "#servicos"}
          >
            Serviços
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={handleClose}
            smooth={true}
            to={pathname !== "/" ? "/#localizacao" : "#localizacao"}
          >
            Localização
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={handleClose}
            smooth={true}
            to={pathname !== "/" ? "/#contato" : "#contato"}
          >
            Contatos
          </NavHashLink>
        </li>

        {isCliente && (
          <li>
            <NavHashLink
              onClick={handleClose}
              smooth={true}
              to={"/meus-agendamentos"}
            >
              Meus Agendamentos
            </NavHashLink>
          </li>
        )}

        {isAdmGerente && (
          <li>
            <NavHashLink
              onClick={handleClose}
              smooth={true}
              to={"/meus-agendamentos"}
            >
              Agendamentos
            </NavHashLink>
          </li>
        )}
      </S.Ul>
    </S.Container>
  );
};
