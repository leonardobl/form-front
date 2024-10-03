import { useEffect, useState } from "react";
import { IItineranteDTO } from "../../../types/itinerante";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Itinerante } from "../../../services/Itinerante";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";

export const useItinerantDetail = () => {
  const [itinerante, setItinerante] = useState<IItineranteDTO>();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getItinerante();
      return;
    }

    toast.error("Itinerante não encontrado");
    setTimeout(() => {
      navigate("/configuracoes/itinerantes");
    }, 1500);
  }, [id]);

  function getItinerante() {
    setIsLoad(true);
    Itinerante.byId(id)
      .then(({ data }) => {
        setItinerante(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
          navigate(-1);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  return { itinerante, navigate };
};
