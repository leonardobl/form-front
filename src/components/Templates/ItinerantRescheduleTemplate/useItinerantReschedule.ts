import dayjs from "dayjs";
import { SyntheticEvent, useState } from "react";
import { Itinerante } from "../../../services/Itinerante";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IItineranteReagendarProps } from "../../../types/itinerante";
import { useContextSite } from "../../../context/Context";
import { toast } from "react-toastify";

export const useItinerantReschedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();

  function handleModal(e: SyntheticEvent) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleSubmit() {
    const newDateShedule = dayjs(date).format("YYYY-MM-DD");

    const PAYLOAD: IItineranteReagendarProps = {
      dataRealizacao: newDateShedule,
      uuidItinerante: id,
    };

    setIsLoad(true);
    Itinerante.reagendar(PAYLOAD)
      .then(() => {
        toast.success("Data atualizada com sucesso!");
        setTimeout(() => {
          navigate(-1);
        }, 1500);
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
        setIsOpen(false);
      });
  }

  return { isOpen, setIsOpen, date, setDate, handleSubmit, handleModal };
};
