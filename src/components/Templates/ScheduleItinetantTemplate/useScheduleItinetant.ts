import { useEffect, useState } from "react";
import {
  IItineranteDTO,
  IItineranteListProps,
} from "../../../types/itinerante";
import { Itinerante } from "../../../services/Itinerante";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../types/pagination";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";
import { Agendamento } from "../../../services/Agendamento";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const useScheduleItinetant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberPage, setNumberPage] = useState(0);
  const [itinerantes, setItinerantes] = useState([] as IItineranteDTO[]);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [token] = useSessionStorage("@token");
  const [usuario] = useSessionStorage("cliente");

  function getItinerantes(data?: IItineranteListProps) {
    setIsLoad(true);
    Itinerante.list({ size: 5, ...data })
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
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  useEffect(() => {
    getItinerantes({ page: numberPage });
  }, [numberPage]);

  function handleFilter(data: IItineranteListProps) {
    getItinerantes(data);
  }

  function handleClean() {
    setNumberPage(0);
    getItinerantes({ page: 0 });
  }

  function handleSchedule(uuidItinerante: string) {
    setIsLoad(true);
    Agendamento.postV2({ uuidItinerante })
      .then(({ data }) => {
        if (token) {
          Agendamento.vincularAgendamentoAoCliente({
            uuidAgendamento: data.uuid,
            uuidCliente: usuario.uuidCliente,
          }).then(() => {
            navigate(`/agendamento/${data.uuid}/servicos`);
            return;
          })
          .catch(
            ({
              response: {
                data: { mensagem },
              },
            }) => {
              toast.error(mensagem);
            }
          )
          .finally(() => {
            setIsLoad(false);
          });
        }
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  return {
    isOpen,
    setIsOpen,
    itinerantes,
    isMobile,
    setNumberPage,
    pagination,
    handleFilter,
    handleClean,
    handleSchedule,
  };
};
