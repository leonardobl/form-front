import React, { useState } from "react";
import { useContextSite } from "../../../context/Context";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import { RolesEnum } from "../../../enums/roles";
import { IAgendamentoDTO } from "../../../types/agendamento";

export const useButtonOptions = () => {
  const { setIsLoad } = useContextSite();
  const [isOpen, setISOpen] = useState(false);
  const [sessionAgendamento, setSessionagendamento] =
    useSessionStorage("agendamentoSession");
  const navigate = useNavigate();

  const isIntern = sessionAgendamento?.roles?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN ||
      regra === RolesEnum.ROLE_GERENTE ||
      regra === RolesEnum.ROLE_COLABORADOR ||
      regra === RolesEnum.ROLE_SUPORTE
  );

  function handleCancel(agendamento: IAgendamentoDTO) {
    const tipoCancelamento = agendamento?.fatura?.pix ? "pix" : "boleto";

    setIsLoad(true);
    if (tipoCancelamento === "pix") {
      return;
    }

    navigate(
      `/agendamento/${agendamento.uuid}/pagamento/cancelamento-${tipoCancelamento}`
    );
  }

  return {
    isIntern,
    navigate,
    isOpen,
    setISOpen,
    setIsLoad,
    sessionAgendamento,
    setSessionagendamento,
    handleCancel,
  };
};
