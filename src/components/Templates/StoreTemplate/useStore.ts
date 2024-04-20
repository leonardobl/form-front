import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loja } from "../../../services/Lojas";
import { ISelectOptions } from "../../../types/inputs";
import {
  IAgendamentoBasicoForm,
  IReagendamentoProps,
} from "../../../types/agendamento";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";
import { IAgendamentoCadastroForm } from "../../../types/agendamento";

export const useStore = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const [lojasOptions, setLojasOptions] = useState<ISelectOptions[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState<IAgendamentoCadastroForm>(
    {} as IAgendamentoCadastroForm
  );

  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  const navigate = useNavigate();

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
  //       setAgendamentoSession({ ...agendamentoSession, reagendamento: false });
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

    if (agendamentoSession?.reagendamento) {
      setModalIsOpen(true);
      return;
    }
    setIsLoad(true);

    // const PAYLOAD: IAgendamentoBasicoForm = {
    //   ...form,
    //   tipoAtendimento: TipoAtendimentoEnum.LOJA,
    //   diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
    // };

    Agendamento.postV2(form)
      .then(({ data }) => {
        setAgendamentoSession({
          ...agendamentoSession,
          uuidAgendamento: data.uuid,
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
    Loja.get()
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          label: item.nome,
          value: item.uuid,
          element: item,
        }));

        setLojasOptions(options);
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
    lojasOptions,
    form,
    setForm,
    modalIsOpen,
    handleSubmit,
    // handleReagendamento,
    setModalIsOpen,
  };
};
