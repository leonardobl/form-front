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

  function handleClose({ path }: { path: string }) {
    if (
      path === "/meus-agendamentos" &&
      !cliente?.role?.includes(RolesEnum.ROLE_CLIENTE)
    ) {
      return;
    }
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
            onClick={() => handleClose({ path: "sobre" })}
            smooth={true}
            to={pathname !== "/" ? "/#sobre" : "#sobre"}
          >
            Sobre Nós
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={() => handleClose({ path: "servicos" })}
            smooth={true}
            to={pathname !== "/" ? "/#servicos" : "#servicos"}
          >
            Serviços
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={() => handleClose({ path: "localizacao" })}
            smooth={true}
            to={pathname !== "/" ? "/#localizacao" : "#localizacao"}
          >
            Localização
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={() => handleClose({ path: "contato" })}
            smooth={true}
            to={pathname !== "/" ? "/#contato" : "#contato"}
          >
            Contatos
          </NavHashLink>
        </li>

        <li>
          <NavHashLink
            onClick={() => handleClose({ path: "/meus-agendamentos" })}
            smooth={true}
            to={
              cliente?.role?.includes(RolesEnum.ROLE_CLIENTE) &&
              token &&
              "/meus-agendamentos"
            }
          >
            Meus Agendamentos
          </NavHashLink>
        </li>
      </S.Ul>
    </S.Container>
  );
};
