import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { Itinerante } from "../../../services/Itinerante";
import { IItineranteForm, IItineranteFormRHF } from "../../../types/itinerante";
import { useNavigate } from "react-router-dom";

export const useItinerantRegister = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit(data: IItineranteFormRHF) {
    setIsLoad(true);
    const PAYLOAD: IItineranteForm = {
      ...data,
      quantidadeVagas: +data.quantidadeVagas,
      uuidColaboradores: data?.uuidColaboradores?.map((i) => i.value),
    };

    Itinerante.create(PAYLOAD)
      .then(() => {
        toast.success("Itinerante cadastrado com sucesso");
        setTimeout(() => {
          navigate("/configuracoes/itinerantes");
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
      });
  }

  return { handleSubmit };
};
