import React, { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { IPagination } from "../../../types/pagination";
import { Agendamento } from "../../../services/Agendamento";
import { useContextSite } from "../../../context/Context";
import {
  IAgendamentoDTO,
  IAgendamentoIniciarForm,
  IGetAgendamentosProps,
  IIniciarAgendamentoProps,
} from "../../../types/agendamento";
import { toast } from "react-toastify";
import { RolesEnum } from "../../../enums/roles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { removeEmpty } from "../../../utils/removeEmpty";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Municipio } from "../../../services/Municipio";
import { ISelectOptions } from "../../../types/inputs";
import { maskCnpj, maskCpf } from "../../../utils/masks";
import { IColaboradorCompletoDTO } from "../../../types/colaborador";
import { Colaborador } from "../../../services/Colaborador";
import { TipoColaboradorEnum } from "../../../enums/tipoColaborador";
import { Loja } from "../../../services/Lojas";
import { set } from "react-hook-form";

interface IModalStartProps extends IIniciarAgendamentoProps {
  open: boolean;
}

export const useSchedules = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [formFilter, setFormFilter] = useState<IGetAgendamentosProps>(
    {} as IGetAgendamentosProps
  );
  const size = 5;
  const [usuario, setUsuario] = useSessionStorage("cliente");
  const [dateInitial, setDateInitial] = useState<Date>();
  const [dateFinal, setDateFinal] = useState<Date>();
  const { setIsLoad } = useContextSite();
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const statusOptions = Object.values(StatusAgendamentoEnum).map((item) => ({
    value: item,
    label: item.split("_").join(" "),
  }));
  const tipoOptions = Object.values(TipoAtendimentoEnum).map((item) => ({
    value: item,
    label: item,
  }));

  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>([]);
  const isCliente = usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const [cidadeOptions, setCidadeoptions] = useState<ISelectOptions[]>([]);
  const [menuOpen, setMenuOpen] = useState(isMobile ? false : true);

  const [colaboradorAtual, setColaboradorAtual] =
    useState<IColaboradorCompletoDTO>({} as IColaboradorCompletoDTO);

  const getColaboradorAtual = useCallback(() => {
    !isCliente &&
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

  useEffect(() => {
    getColaboradorAtual();
  }, [getColaboradorAtual]);

  function handleCpf(e: string) {
    let newvalue = "";

    if (e?.length > 14) {
      newvalue = maskCnpj(e);
      setFormFilter((prev) => ({ ...prev, cpfCnpj: newvalue }));
      return;
    }

    newvalue = maskCpf(e);
    setFormFilter((prev) => ({ ...prev, cpfCnpj: newvalue }));
  }

  useEffect(() => {
    setIsLoad(true);

    Municipio.get({ size: 999 })
      .then(({ data }) => {
        const options = data.content.map((item) => ({
          value: item.nome.toUpperCase(),
          label: item.nome,
          element: item,
        }));
        setCidadeoptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }, []);

  useEffect(() => {
    setIsLoad(true);

    getAgendamentos({ ...formFilter, size, page: numberPage });
  }, [numberPage]);

  function handleFilter(e: React.SyntheticEvent) {
    e.preventDefault();

    const values = Object.values(formFilter).some(
      (item) => item || typeof item === "number"
    );
    if (!values) return;

    setIsLoad(true);

    setNumberPage(0);

    getAgendamentos({ ...formFilter, size, page: 0 });
  }

  function getAgendamentos(filters: IGetAgendamentosProps) {
    const filtered = removeEmpty(filters);

    const idCliente = isCliente ? usuario?.uuidCliente : null;

    Agendamento.get({ ...filtered, idCliente })
      .then(({ data }) => {
        setAgendamentos(data.content);

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
      .finally(() => setIsLoad(false));
  }

  function handleClear() {
    isMobile && setMenuOpen(false);
    const values = Object.values(formFilter).some(
      (item) => item || typeof item === "number"
    );
    if (!values) return;

    setIsLoad(true);
    setFormFilter({
      cidade: null,
      dataFinal: "",
      dataInicial: "",
      loja: null,
      placa: "",
      renavam: "",
      veiculo: "",
      chassi: "",
      statusAgendamento: null,
      tipoAtendimento: null,
    });

    setDateFinal(null);
    setDateInitial(null);
    setNumberPage(0);

    getAgendamentos({ size, page: 0 });
  }
  function atribuirAgendamento(data: IIniciarAgendamentoProps) {
    const PAYLOAD: IIniciarAgendamentoProps = {
      uuid: data.uuid,
      uuidVistoriador: data.uuidVistoriador,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);

    Agendamento.atribuir(PAYLOAD)
      .then(() => {
        toast.success("Agendamento atribuido com sucesso!");
        getAgendamentos({ ...formFilter, size, page: numberPage });
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

  function iniciarVistoria(data: IIniciarAgendamentoProps) {
    const PAYLOAD: IIniciarAgendamentoProps = {
      ...data,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);
    Agendamento.iniciar(PAYLOAD)
      .then(({ data }) => {
        toast.success("Agendamento iniciado");
        getAgendamentos({ ...formFilter, size, page: numberPage });
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
    handleClear,
    pagination,
    dateInitial,
    setDateInitial,
    dateFinal,
    setDateFinal,
    statusOptions,
    isMobile,
    handleFilter,
    numberPage,
    setNumberPage,
    formFilter,
    setFormFilter,
    tipoOptions,
    agendamentos,
    handleCpf,
    cidadeOptions,
    isCliente,
    menuOpen,
    setMenuOpen,
    iniciarVistoria,
    atribuirAgendamento,
  };
};
