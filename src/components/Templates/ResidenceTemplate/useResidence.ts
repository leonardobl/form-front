import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Delivery } from "../../../services/Delivery";
import { useNavigate, useParams } from "react-router-dom";

export const useResidence = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [form, setForm] = useState<IAgendamentoCadastroForm>(
    {} as IAgendamentoCadastroForm
  );
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  // function handleReagendamento() {
  //   setIsLoad(true);
  //   setModalIsOpen(false);

  //   const PAYLOAD: IReagendamentoProps = {
  //     diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
  //     horaAgendada: form.horaAgendada,
  //     uuidAgendamento: agendamentoSession?.uuidAgendamento,
  //     uuidLoja: form.uuidLoja,
  //     uuidDelivery: form.uuidDelivery,
  //   };

  //   Agendamento.reagendar(PAYLOAD)
  //     .then(() => {
  //       toast.success("Reagendamento efetuado com sucesso!");
  //       setAgendamentoSession({
  //         ...agendamentoSession,
  //         reagendamento: false,
  //       });
  //       setTimeout(() => {
  //         navigate(
  //           `/meus-agendamentos/agendamento?id=${agendamentoSession?.uuidAgendamento}`
  //         );
  //       }, 2000);
  //     })
  //     .catch(
  //       ({
  //         response: {
  //           data: { mensagem },
  //         },
  //       }) => toast.error(mensagem)
  //     )
  //     .finally(() => setIsLoad(false));
  // }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    Agendamento.postV2(form)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidAgendamento: data.uuid,
          cidade: data?.delivery?.cidade,
        });

        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: agendamentoSession?.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          });
        }

        navigate(`/agendamento/${data.uuid}/login-cadastro`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    Delivery.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.uuid,
          label: item.cidade,
          element: item,
        }));

        setCidadesOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, []);

  return {
    cidadesOptions,
    form,
    setForm,
    handleSubmit,
  };
};
