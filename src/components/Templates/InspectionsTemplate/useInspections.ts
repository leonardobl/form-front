import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Colaborador } from "../../../services/Colaborador";
import {
  IColaboradorCompletoDTO,
  IListarAgendamentosProps,
} from "../../../types/colaborador";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { resetValues } from "../../../utils/resetObject";
import { reverseToIsoDate } from "../../../utils/dateTransform";

export const useInspections = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [filterOpen, setFilterOpen] = useState(isMobile ? false : true);
  const [date, setDate] = useState<Date>(new Date());
  const navigate = useNavigate();
  const [vistorias, setvistorias] = useState<IAgendamentoDTO[]>([]);
  const [formFilter, setFormFilter] = useState<IListarAgendamentosProps>({
    uuidColaborador: "",
    data: reverseToIsoDate(new Date().toLocaleDateString()),
  } as IListarAgendamentosProps);
  const [colaboradorAtual, setColaboradorAtual] =
    useState<IColaboradorCompletoDTO>({} as IColaboradorCompletoDTO);
  const { setIsLoad } = useContextSite();

  const getColaboradorAtual = useCallback(() => {
    Colaborador.atual()
      .then(({ data }) => {
        setColaboradorAtual(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          // toast.error(mensagem);
          console.log("error-message", mensagem);
        }
      );
  }, []);

  function getVistorias(data: string) {
    setIsLoad(true);

    Colaborador.listarAgendamentos({
      data: reverseToIsoDate(data),
      uuidColaborador: colaboradorAtual?.uuid,
    })
      .then(({ data }) => {
        setvistorias(data);
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
    getColaboradorAtual();
  }, [getColaboradorAtual]);

  useEffect(() => {
    if (colaboradorAtual?.uuid) {
      getVistorias(formFilter?.data);
    }
  }, [colaboradorAtual?.uuid]);

  function cleanData() {
    setIsLoad(true);

    setFormFilter({
      uuidColaborador: "",
      data: new Date().toLocaleDateString(),
    });
    setDate(new Date());

    setTimeout(() => {
      getVistorias(new Date().toLocaleDateString());
    }, 1000);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    getVistorias(formFilter?.data);
  }

  return {
    isMobile,
    filterOpen,
    setFilterOpen,
    navigate,
    date,
    setDate,
    vistorias,
    setFormFilter,
    cleanData,
    handleSubmit,
  };
};
