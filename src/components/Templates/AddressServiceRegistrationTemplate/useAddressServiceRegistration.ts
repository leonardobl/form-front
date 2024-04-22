import React, { useCallback, useEffect, useState } from "react";
import { maskPhone } from "../../../utils/masks";
import { useNavigate } from "react-router-dom";
import { ISelectOptions } from "../../../types/inputs";
import { Cliente } from "../../../services/Cliente";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useAddressServiceRegistration = () => {
  const navigate = useNavigate();
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const getConcessionarias = useCallback(() => {
    if (agendamentoSession.cidade) {
      Cliente.getConcessionarias({ cidade: agendamentoSession?.cidade }).then(
        ({ data }) => {
          const options = data.content.map((item) => ({
            value: item.uuid,
            label: item.nome,
          }));

          setSelectOptions(options);
        }
      );
    }
  }, [agendamentoSession?.cidade]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    navigate(`/agendamento/${"dsfsdf"}/pagamento`);
  }

  useEffect(() => {
    getConcessionarias();
  }, []);

  return {
    maskPhone,
    handleSubmit,
    selectOptions,
  };
};
