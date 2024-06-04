import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { LocalAtendimentoEnum } from "../../../enums/localAtendimento";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import {
  IAgendamentoCadastroForm,
  IAgendamentoDTO,
  IAtendimentoConcessionariaForm,
  IReagendamentoProps,
} from "../../../types/agendamento";
import { useContextSite } from "../../../context/Context";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { addDays } from "date-fns";
import { Cliente } from "../../../services/Cliente";
import { IClienteDTO } from "../../../types/cliente";

interface FormDeliveryProps extends IAtendimentoConcessionariaForm {
  uuidDelivery: string;
  local: string;
}

interface RouteParams extends Record<string, string> {
  uuidAgendamento: string;
}

export const useDelivery = () => {
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const { uuidAgendamento } = useParams<RouteParams>();
  const [searchParams, setSearchParams] = useSearchParams();
  const reagendamento = searchParams.get("reagendamento") === "true";
  const [usuario] = useSessionStorage("cliente");
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const localOptions = Object.entries(LocalAtendimentoEnum).map((item) => ({
    value: item[0],
    label: item[1],
  }));
  const [form, setForm] = useState<FormDeliveryProps>({} as FormDeliveryProps);
  const { setIsLoad } = useContextSite();
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [concessionarias, setConcessionarias] = useState<ISelectOptions[]>([]);
  const [date, setDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reagendamentoForm, setReagendamentoForm] =
    useState<IReagendamentoProps>({} as IReagendamentoProps);

  function handleReagendamento() {
    setIsLoad(true);
    setModalIsOpen(false);

    const PAYLOAD: IReagendamentoProps = {
      diaAgendado: date.toLocaleDateString().split("/").reverse().join("-"),
      horaAgendada: reagendamentoForm.horaAgendada,
      uuidAgendamento: uuidAgendamento,
      uuidLoja: reagendamentoForm.uuidLoja,
      uuidDelivery: reagendamentoForm.uuidDelivery,
    };

    Agendamento.reagendar(PAYLOAD)
      .then(() => {
        toast.success("Reagendamento efetuado com sucesso!");
        setTimeout(() => {
          navigate(`/meus-agendamentos/agendamento?id=${uuidAgendamento}`);
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

  const getCidades = useCallback(() => {
    Delivery.get().then(({ data }) => {
      const options = data.content.map((item) => ({
        label: item.cidade,
        value: item.uuid,
        element: item,
      }));

      setCidadesOptions(options);
    });
  }, []);

  useEffect(() => {
    getCidades();
    if (reagendamento) {
      setIsLoad(true);
      Agendamento.getById({ uuid: uuidAgendamento })
        .then(({ data }) => {
          setReagendamentoForm({
            ...reagendamentoForm,
            uuidDelivery: data?.delivery?.uuid,
            localAtendimento: data?.concessionaria
              ? "CONCESSIONARIA"
              : "DOMICILIO",
            diaAgendado: data?.diaAgendado,
            horaAgendada: data?.horaAgendada,
          });
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
  }, []);

  const getConcessionarias = useCallback(() => {
    setIsLoad(true);

    const cidade = cidadesOptions.find(
      (i) => i.value === form?.uuidDelivery
    )?.label;

    Cliente.getConcessionarias({
      cidade,
    })
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.uuid,
          label: item.nome,
          element: item,
        }));

        setConcessionarias(options);
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
      });
  }, [form?.uuidDelivery]);

  useEffect(() => {
    if (form?.local === "CONCESSIONARIA" && form?.uuidDelivery) {
      getConcessionarias();

      return;
    }
    setForm((prev) => ({
      ...prev,
      nome: "",
      telefone: "",
      uuidConcessionaria: "",
    }));
  }, [form?.local, form?.uuidDelivery]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (reagendamento) {
      setModalIsOpen(true);
      return;
    }

    setIsLoad(true);

    const PAYLOAD: IAgendamentoCadastroForm = {
      concessionaria: !!(form.local === "CONCESSIONARIA"),
      uuidDelivery: form.uuidDelivery,
    };

    const cliente: IClienteDTO = await Cliente.getByUsuario({
      uuidUsuario: usuario?.uuidUsuario,
    }).then(({ data }) => data);

    const agendamentoData: IAgendamentoDTO = await Agendamento.postV2(
      PAYLOAD
    ).then(({ data }) => data);

    if (token && cliente) {
      Agendamento.vincularAgendamentoAoCliente({
        uuidAgendamento: agendamentoData?.uuid,
        uuidCliente: cliente?.uuid,
      })
        .then(({ data }) => {
          if (form?.uuidConcessionaria) {
            const PAYLOAD_CONCESSIONARIA: IAtendimentoConcessionariaForm = {
              nome: form?.nome,
              telefone: form?.telefone,
              uuidConcessionaria: form?.uuidConcessionaria,
            };

            Agendamento.AtualizarConcessionariaAtedimento({
              ...PAYLOAD_CONCESSIONARIA,
              uuid: data.uuid,
            }).catch(
              ({
                response: {
                  data: { mensagem },
                },
              }) => toast.error(mensagem)
            );
          }
        })
        .then(() => {
          navigate(`/agendamento/${agendamentoData?.uuid}/servicos`);
          return;
        })
        .catch((error) => toast.error(error.message))
        .finally(() => setIsLoad(false));
    } else {
      navigate(`/agendamento/${agendamentoData?.uuid}/login-cadastro`);
    }

    setIsLoad(false);
  }

  useEffect(() => {
    setDate(null);

    if (reagendamentoForm?.uuidDelivery) {
      setIsLoading(true);
      Delivery.getDiasIndisponiveis({
        uuidDelivery: reagendamentoForm.uuidDelivery,
      })
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
    localOptions,
    form,
    setForm,
    reagendamentoForm,
    setReagendamentoForm,
    handleSubmit,
    isLoading,
    modalIsOpen,
    setModalIsOpen,
    diasIndisponiveis,
    horariosOptions,
    handleReagendamento,
    date,
    setDate,
    reagendamento,
    concessionarias,
  };
};
