import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IFeriadoDTO, IFeriadoListProps } from "../../../types/feriado";
import { Feriado } from "../../../services/Feriado";
import { IPagination } from "../../../types/pagination";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";

const HEADERS = ["Data", "Tipo", "Cidade", "UF"];

export const useHolidays = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [feriados, setFeriados] = useState<IFeriadoDTO[]>([] as IFeriadoDTO[]);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const { setIsLoad } = useContextSite();
  const [filters, setFilters] = useState<IFeriadoListProps>(
    {} as IFeriadoListProps
  );

  function getFeriados(data?: IFeriadoListProps) {
    setIsLoad(true);
    Feriado.list({ page: numberPage, size: 5, ...data })
      .then(({ data }) => {
        setFeriados(data.content);
        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.numberOfElements,
        });
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
    getFeriados(filters);
  }, [numberPage]);

  function handleFilter(data: IFeriadoListProps) {
    setFilters(data);
    const hasItem = Object.values(data).some((i) => i);

    if (hasItem) {
      getFeriados({ page: 0, ...data });
    }
  }

  function handleClean() {
    getFeriados({ page: 0 });
    setNumberPage(0);
    setFilters({} as IFeriadoListProps);
  }

  return {
    handleClean,
    open,
    setOpen,
    HEADERS,
    isMobile,
    pagination,
    setNumberPage,
    feriados,
    handleFilter,
  };
};
