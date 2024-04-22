import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";
import { IAgendamentoCadastroForm, IReagendamentoProps } from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Delivery } from "../../../services/Delivery";
import { useNavigate, useParams } from "react-router-dom";
import { addDays } from "date-fns";

export const useResidence = () => {
  const [token] = useSessionStorage("@token");
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form, setForm] = useState<IAgendamentoCadastroForm>({} as IAgendamentoCadastroForm);
  const [reagendamentoForm, setReagendamentoForm] = useState<IReagendamentoProps>({} as IReagendamentoProps);
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");

  function handleReagendamento() {
    setIsLoad(true);
    setModalIsOpen(false);

    const PAYLOAD: IReagendamentoProps = {
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
      horaAgendada: reagendamentoForm.horaAgendada,
      uuidAgendamento: agendamentoSession?.uuidAgendamento,
      uuidLoja: reagendamentoForm.uuidLoja,
      uuidDelivery: reagendamentoForm.uuidDelivery,
    };

    Agendamento.reagendar(PAYLOAD)
      .then(() => {
        toast.success("Reagendamento efetuado com sucesso!");
        setAgendamentoSession({
          ...agendamentoSession,
          reagendamento: false,
        });
        setTimeout(() => {
          navigate(
            `/meus-agendamentos/agendamento?id=${agendamentoSession?.uuidAgendamento}`
          );
        }, 2000);
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

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (agendamentoSession?.reagendamento) {
      setModalIsOpen(true);
      return;
    }

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

  useEffect(() => {
    setDate(null);

    if (reagendamentoForm?.uuidDelivery) {
      setIsLoading(true);
      Delivery.getDiasIndisponiveis({ uuidDelivery: reagendamentoForm.uuidDelivery })
        .then(({ data }) => {
          const options = data.map((item) => addDays(new Date(item), 1));
          setDiasIndisponiveis(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoading(false));
    }
  }, [reagendamentoForm?.uuidDelivery]);

  useEffect(() => {
    setReagendamentoForm((prev) => ({ ...prev, horaAgendada: null }));
    if (date) {
      const newDate = date.toLocaleDateString().split("/").reverse().join("-");

      if (reagendamentoForm?.uuidDelivery) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: reagendamentoForm?.uuidDelivery,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }
    }
  }, [date]);

  return {
    cidadesOptions,
    form,
    setForm,
    reagendamentoForm, 
    setReagendamentoForm,
    handleSubmit,
    setModalIsOpen,
    date,
    setDate,
    isLoading,
    diasIndisponiveis,
    modalIsOpen,
    horariosOptions,
    handleReagendamento,
  };
};
