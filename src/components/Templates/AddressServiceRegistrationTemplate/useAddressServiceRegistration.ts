import React, { useCallback, useEffect, useState } from "react";
import { maskPhone } from "../../../utils/masks";
import { useNavigate, useParams } from "react-router-dom";
import { ISelectOptions } from "../../../types/inputs";
import { Cliente } from "../../../services/Cliente";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { IAtendimentoConcessionariaProps } from "../../../types/agendamento";

export const useAddressServiceRegistration = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();
  const params = useParams();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [form, setForm] = useState<IAtendimentoConcessionariaProps>(
    {} as IAtendimentoConcessionariaProps
  );
  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const getConcessionarias = useCallback(() => {
    if (agendamentoSession?.cidade) {
      setIsLoad(true);
      Cliente.getConcessionarias({ cidade: agendamentoSession?.cidade })
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            value: item.uuid,
            label: item.nome,
          }));

          setSelectOptions(options);
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
    }
  }, [agendamentoSession?.cidade]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setIsLoad(true);

    const PAYLOAD: IAtendimentoConcessionariaProps = {
      ...form,
      uuid: params?.uuidAgendamento,
    };

    Agendamento.AtualizarConcessionariaAtedimento(PAYLOAD)
      .then(({ data }) => {
        if (agendamentoSession?.reagendamento) {
          setAgendamentoSession({
            ...agendamentoSession,
            uuidAgendamento: data.uuid,
          });
          navigate(`/agendamento/${data?.uuid}/confirmar-horario`);
          return;
        }
        navigate(`/agendamento/${data?.uuid}/pagamento`);
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
    getConcessionarias();
  }, []);

  return {
    maskPhone,
    handleSubmit,
    selectOptions,
    form,
    setForm,
  };
};
