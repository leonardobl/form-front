import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { useContextSite } from "../../../context/Context";
import { Cliente } from "../../../services/Cliente";
import { toast } from "react-toastify";
import {
  IAgendamentoDTO,
  IAtendimentoConcessionariaForm,
} from "../../../types/agendamento";
import { useNavigate, useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";

export const useConcessionaireAddressRegister = () => {
  const [concessionarias, setConcessionarias] = useState<ISelectOptions[]>([]);
  const { setIsLoad } = useContextSite();
  const [form, setForm] = useState<IAtendimentoConcessionariaForm>(
    {} as IAtendimentoConcessionariaForm
  );
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const { uuidAgendamento } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (agendamento?.uuid) {
      setIsLoad(true);

      Cliente.getConcessionarias({
        cidade: agendamento?.delivery?.cidade,
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
    }
  }, [agendamento?.uuid]);

  useEffect(() => {
    Agendamento.getById({ uuid: uuidAgendamento })
      .then(({ data }) => {
        setAgendamento(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, [uuidAgendamento]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD_CONCESSIONARIA: IAtendimentoConcessionariaForm = {
      nome: form?.nome,
      telefone: form?.telefone,
      uuidConcessionaria: form?.uuidConcessionaria,
    };
    Agendamento.AtualizarConcessionariaAtedimento({
      ...PAYLOAD_CONCESSIONARIA,
      uuid: uuidAgendamento,
    })
      .then(() => {
        navigate(`/agendamento/${uuidAgendamento}/pagamento`);
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

  return { concessionarias, form, setForm, handleSubmit };
};
