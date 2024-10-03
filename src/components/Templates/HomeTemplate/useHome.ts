import React from "react";
import { useNavigate } from "react-router-dom";
import { RolesEnum } from "../../../enums/roles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useHome = () => {
  const navigate = useNavigate();
  const [usuario] = useSessionStorage("cliente");
  const isCliente = usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const isAdmin = usuario?.roles?.includes(RolesEnum.ROLE_ADMIN);
  const isVistoriador = usuario?.roles?.includes(RolesEnum.ROLE_VISTORIADOR);
  const isDespachante = usuario?.tipo === 'DESPACHANTE'
  const [token] = useSessionStorage("@token");
  const Project = process.env.REACT_APP_PROJECT;

  return { navigate, isCliente, isAdmin, isVistoriador, Project, token, isDespachante };
};
