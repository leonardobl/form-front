import React, { useEffect, useState } from "react";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { IReembolsoForm, IReembolsoProps } from "../../../types/agendamento";
import { resetValues } from "../../../utils/resetObject";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useTicketCancellation = () => {
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>(
    FormaPagamentoEnum.PIX
  );
  const navigate = useNavigate();
  const [form, setForm] = useState<IReembolsoForm>({} as IReembolsoForm);
  const { setIsLoad } = useContextSite();
  const params = useParams();

  function handleCancel(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IReembolsoProps = {
      ...form,
      uuid: params.uuidAgendamento,
    };

    if (PAYLOAD?.uuid) {
      setIsLoad(true);

      Agendamento.cancelar(PAYLOAD)
        .then(() => {
          toast.success("Agendamento cancelado!");
          setTimeout(() => {
            navigate("/agendamento");
          }, 2500);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => {
            toast.error(mensagem);
          }
        )
        .finally(() => {
          setIsLoad(false);
        });

      return;
    }

    toast.error("uuid agendamento não encontrado");
  }

  useEffect(() => {
    const reset = resetValues(form);
    setForm(reset);
  }, [tipoPagamento]);

  return { tipoPagamento, setTipoPagamento, form, setForm, handleCancel };
};
