import React, { useEffect, useState } from "react";
import { IAtendimentoDomiciliarForm } from "../../../types/agendamento";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { maskPhone } from "../../../utils/masks";
import { ViaCep } from "../../../services/ViaCep";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useAddressRegistration = () => {
  const [form, setForm] = useState<IAtendimentoDomiciliarForm>(
    {} as IAtendimentoDomiciliarForm
  );
  const { isLoad, setIsLoad } = useContextSite();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [isDisabled, setIsDisabled] = useState(false);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const navigate = useNavigate();
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const params = useParams();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD = { ...form, uuid: params?.uuidAgendamento };

    Agendamento.putAddress(PAYLOAD)
      .then(({ data }) => {
        toast.success("Endereco cadastrado com sucesso!");
        setTimeout(() => {
          if (agendamentoSession?.reagendamento) {
            setAgendamentoSession({
              ...agendamentoSession,
              uuidAgendamento: PAYLOAD.uuid,
            });
            navigate(`/agendamento/${PAYLOAD.uuid}/confirmar-horario`);
            return;
          }

          navigate(`/agendamento/${params.uuidAgendamento}/pagamento`);
        }, 3000);
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

  function handlePhone(e: string) {
    const newPhoneValue = maskPhone(e);
    setForm((prev) => ({ ...prev, telefone: newPhoneValue }));
  }

  function compararPorSigla(a: { value: string; label: string; element: any }, b: { value: string; label: string; element: any }): number {
    if (a.value < b.value) {
        return -1;
    } else if (a.value > b.value) {
        return 1;
    } else {
        return 0;
    }
  }

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        })).sort(compararPorSigla);

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  function handleCep() {
    if (form?.endereco?.cep?.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(form?.endereco?.cep)
          .then(({ data }) => {
            setForm((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
                cep: form?.endereco?.cep,
              },
            }));

            if (data.localidade !== agendamentoSession?.cidade) {
              toast.error("Endereço fora da cidade escolhida para atendimento");
              setIsDisabled(true);

              return;
            }

            setIsDisabled(false);
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    if (form?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: form.endereco.uf })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
        })
        .catch((erro) => toast.error("Erro ao requisitar as cidades"));
    }
  }, [form?.endereco?.uf]);

  return {
    form,
    setForm,
    handleSubmit,
    ufOptions,
    handlePhone,
    handleCep,
    cidadesOptions,
    isDisabled,
  };
};
