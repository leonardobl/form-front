import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";

export const useStore = () => {
  const [searchParams] = useSearchParams();
  const reagendamento = !!(searchParams.get("reagendamento") === "true");
  // useEffect(() => {
  //   setReagendamentoForm((prev) => ({ ...prev, horaAgendada: null }));
  //   if (date) {
  //     const newDate = date.toLocaleDateString().split("/").reverse().join("-");

  //     if (reagendamentoForm?.uuidLoja) {
  //       Loja.getHorariosDisponiveis({
  //         uuidLoja: reagendamentoForm?.uuidLoja,
  //         dataAgendamento: newDate,
  //       }).then(({ data }) => {
  //         const options = data.map((item) => ({
  //           value: item,
  //           label: item,
  //           element: item,
  //         }));

  //         setHorariosOptions(options);
  //       });
  //     }
  //   }
  // }, [date]);

  // useEffect(() => {
  //   setDate(null);
  //   if (reagendamentoForm?.uuidLoja) {
  //     setIsLoading(true);
  //     Loja.getDiasIndisponiveis({ uuidLoja: reagendamentoForm.uuidLoja })
  //       .then(({ data }) => {
  //         const options = data.map((item) => addDays(new Date(item), 1));

  //         setDiasIndisponiveis(options);
  //       })
  //       .catch(
  //         ({
  //           response: {
  //             data: { mensagem },
  //           },
  //         }) => toast.error(mensagem)
  //       )
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [reagendamentoForm?.uuidLoja]);

  useEffect(() => {
    console.log(reagendamento);
  }, [reagendamento]);

  return {
    reagendamento,
  };
};
