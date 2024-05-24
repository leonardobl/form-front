import React, { useState } from "react";
import { useContextSite } from "../../../context/Context";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import { RolesEnum } from "../../../enums/roles";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";

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

    if (tipoCancelamento === "pix") {
      setIsLoad(true);
      Agendamento.cancelar({ uuid: agendamento.uuid })
        .then(() => {
          navigate(`/agendamento/pagamento/cancelamento-pix`);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => {
          setIsLoad(false);
          setISOpen(false);
        });
      return;
    }

    navigate(`/agendamento/${agendamento.uuid}/pagamento/cancelamento-boleto`);
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
