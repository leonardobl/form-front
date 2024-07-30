import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useContextSite } from "../../../context/Context";
import { IPagination } from "../../../types/pagination";
import { useNavigate } from "react-router-dom";
import { ISelectOptions } from "../../../types/inputs";
import { Itinerante } from "../../../services/Itinerante";
import { IItineranteDTO } from "../../../types/itinerante";

const VALUES = [
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
];

export const useItinerant = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const { setIsLoad } = useContextSite();
  const [itinerantes, setItinerantes] = useState<IItineranteDTO[]>(
    [] as IItineranteDTO[]
  );

  const getItinerantes = useCallback(() => {
    Itinerante.list().then(({ data }) => {
      setItinerantes(data.content);
    });
  }, []);

  useEffect(() => {
    getItinerantes();
  }, []);

  return {
    isMobile,
    isOpen,
    setIsOpen,
    VALUES,
    pagination,
    setNumberPage,
    navigate,
    itinerantes,
  };
};
