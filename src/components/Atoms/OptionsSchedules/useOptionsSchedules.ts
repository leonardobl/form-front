import React, { useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";

export const useOptionsSchedules = () => {
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [isOpen, setIsOpen] = useState(false);

  const isCliente = !!agendamentoSession?.roles?.includes(
    RolesEnum.ROLE_CLIENTE
  );

  return { isCliente, isOpen, setIsOpen };
};
