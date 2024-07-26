import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Loja } from "../../../services/Lojas";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { IPagination } from "../../../types/pagination";
import { ILojaDTO } from "../../../types/loja";

export const useAdminStores = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [lojas, setLojas] = useState<ILojaDTO[]>([] as ILojaDTO[]);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);

  function getLojas() {
    setIsLoad(true);
    Loja.get({ size: 7, page: numberPage })
      .then(({ data }) => {
        setLojas(data.content);
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
    getLojas();
  }, [numberPage]);

  return { isMobile, navigate, lojas, pagination, setNumberPage };
};
