import React, { useEffect, useState } from "react";
import { IAtendimentoDomiciliarForm } from "../../../types/agendamento";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { maskCep, maskPhone } from "../../../utils/masks";
import { ViaCep } from "../../../services/ViaCep";
import { IAgendamentoSessionProps } from "../../../types/agendamentoSession";
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
          if (agendamentoSession?.revistoria) {
            setAgendamentoSession({
              ...agendamentoSession,
              uuidAgendamento: PAYLOAD.uuid,
            });
            navigate(`/meus-agendamentos/agendamento?${PAYLOAD.uuid}`);
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

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  function handleCep(e: string) {
    const newCepValue = maskCep(e);

    if (newCepValue.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(e)
          .then(({ data }) => {
            setForm((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.street || "",
                bairro: data.neighborhood || "",
                cidade: data.city || "",
                uf: data.state || "",
                cep: newCepValue || "",
              },
            }));

            if (data.city !== agendamentoSession?.cidade) {
              toast.error("Endereço fora da cidade escolhida para atendimento");
              setIsDisabled(true);

              return;
            }

            setIsDisabled(false);
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);

      return;
    }

    setForm((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, cep: newCepValue },
    }));
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
