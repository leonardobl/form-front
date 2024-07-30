import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { Loja } from "../../../services/Lojas";
import { Itinerante } from "../../../services/Itinerante";

export const useFormFilterItinerant = () => {
  const [uuidsDeliverys, setUuidsDeliverys] = useState<string[]>(
    [] as string[]
  );
  const [unidades, setUnidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const getDeliverys = useCallback(() => {
    Loja.get().then(({ data }) => {
      const uuids = data.content.map((i) => i.uuid);
      setUuidsDeliverys([...uuids]);
    });
  }, []);

  useEffect(() => {
    getDeliverys();
  }, []);

  useEffect(() => {
    if (uuidsDeliverys.length) {
      const fetchItineranteData = async () => {
        const promises = uuidsDeliverys.map(
          async (uuid) => await Itinerante.list({ uuidDelivery: uuid })
        );

        const results = await Promise.all(promises);

        console.log(results);
      };

      fetchItineranteData();
    }
  }, [uuidsDeliverys]);

  return { unidades };
};
