import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useContextSite } from "../../../context/Context";
import { IPagination } from "../../../types/pagination";
import { useNavigate } from "react-router-dom";
import { Itinerante } from "../../../services/Itinerante";
import {
  IItineranteDTO,
  IItineranteListProps,
} from "../../../types/itinerante";
import { toast } from "react-toastify";

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

  function handleClean() {
    getItinerantes({ page: 0 });
    setNumberPage(0);
  }

  function getItinerantes(props?: IItineranteListProps) {
    setIsLoad(true);
    Itinerante.list({ ...props, size: 5 })
      .then(({ data }) => {
        setItinerantes(data.content);
        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
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

  useEffect(() => {
    getItinerantes({ page: numberPage });
  }, [numberPage]);

  function handleSubmit(data: IItineranteListProps) {
    getItinerantes({ ...data, page: numberPage });
  }

  return {
    isMobile,
    isOpen,
    setIsOpen,
    pagination,
    setNumberPage,
    navigate,
    itinerantes,
    handleClean,
    handleSubmit,
  };
};
