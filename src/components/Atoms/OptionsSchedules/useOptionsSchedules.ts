import React, { useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

const RESOLCES = ["ATRIBUIR_VISTORIA", "ADMIN"];

export const useOptionsSchedules = () => {
  const [usuario, setUsuario] =
    useSessionStorage("cliente");
  const isCliente = !!usuario?.roles?.includes(
    RolesEnum.ROLE_CLIENTE
  );
  const isAdmin = RESOLCES.some(
    (item) => item === "ATRIBUIR_VISTORIA" || item === "ADMIN"
  );
  const [isOpen, setIsOpen] = useState(false);
  const disabled =
    isCliente ||
    !RESOLCES.some((item) => item === "ATRIBUIR_VISTORIA" || item === "ADMIN");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return {
    isCliente,
    isOpen,
    setIsOpen,
    disabled,
    isAdmin,
    modalIsOpen,
    setModalIsOpen,
  };
};
