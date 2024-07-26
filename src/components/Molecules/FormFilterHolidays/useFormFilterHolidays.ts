import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Ibge } from "../../../services/Ibge";

export const useFormFilterHolidays = () => {
  const [ufs, setUfs] = useState<ISelectOptions[]>([] as ISelectOptions[]);

  const getUfs = useCallback(() => {
    Ibge.UFs().then(({ data }) => {
      const options = data.map((_) => ({
        value: _.sigla,
        label: _.sigla,
        element: _,
      }));

      setUfs(options);
    });
  }, []);

  useEffect(() => {
    getUfs();
  }, []);

  return { ufs };
};
