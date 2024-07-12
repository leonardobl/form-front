import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import { RolesEnum } from "../../../enums/roles";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { Usuario } from "../../../services/Usuario";

export const useButtonOptions = () => {
  const { setIsLoad } = useContextSite();
  const [isOpen, setISOpen] = useState(false);
  const [usuario, setUsuario] = useSessionStorage("cliente");
  const navigate = useNavigate();
  const [recursos, setRecursos] = useState<string[]>([])

  const isIntern = !usuario?.roles?.some(
    (regra) =>
      regra === RolesEnum.ROLE_CLIENTE
  );

  useEffect(() => {
    Usuario.getRecursosByUuid({uuid: usuario?.uuidUsuario})
    .then(({data}) => {setRecursos(data)})
    .catch(({
      response: {
        data: { mensagem },
      },
    }) => toast.error(mensagem)
    );
  }, []);

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
    } else {
      if ([StatusAgendamentoEnum.PAGO, StatusAgendamentoEnum.AGENDADO].includes(agendamento?.status)) {
        navigate(
          `/agendamento/${agendamento.uuid}/pagamento/cancelamento-boleto`
        );
        return;
      } else if (agendamento?.status === StatusAgendamentoEnum.AGUARDANDO_PAGAMENTO) {
        Agendamento.cancelar({ uuid: agendamento.uuid })
        .then(() => {
          toast.success("Agendamento cancelado com sucesso");
          navigate(`/meus-agendamentos`);
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
        }
    }
  }

  return {
    isIntern,
    navigate,
    isOpen,
    setISOpen,
    setIsLoad,
    sessionAgendamento: usuario,
    setSessionagendamento: setUsuario,
    handleCancel,
    recursos,
  };
};
