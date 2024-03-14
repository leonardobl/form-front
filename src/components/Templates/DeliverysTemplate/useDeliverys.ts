import React, { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Delivery } from "../../../services/Delivery";
import { toast } from "react-toastify";

export const useDeliverys = () => {
  const [formFilter, setFormFilter] = useState();
  const [date, setDate] = useState(new Date());
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);

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

  return { formFilter, setFormFilter, date, setDate, cidadesOptions };
};
