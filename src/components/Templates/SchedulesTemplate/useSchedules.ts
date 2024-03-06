import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { IPagination } from "../../../types/pagination";
import {
  Agendamento,
  IGetAgendamentosProps,
} from "../../../services/Agendamento";
import { useContextSite } from "../../../context/Context";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { toast } from "react-toastify";
import { RolesEnum } from "../../../enums/roles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { removeEmpty } from "../../../utils/removeEmpty";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Municipio } from "../../../services/Municipio";
import { ISelectOptions } from "../../../types/inputs";

export const useSchedules = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [formFilter, setFormFilter] = useState<IGetAgendamentosProps>(
    {} as IGetAgendamentosProps
  );
  const size = 5;
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
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
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>([]);
  const isCliente = agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const [cidadeOptions, setCidadeoptions] = useState<ISelectOptions[]>([]);
  const [menuOpen, setMenuOpen] = useState(isMobile ? false : true);

  function iniciarVistoria(uuidAgendamento: string) {
    Agendamento.iniciar({ uuid: uuidAgendamento })
      .then(({ data }) => {
        // setDetalheAgendamento(data.uuid);

        window.open(
          `/meus-agendamentos/agendamento?id=${uuidAgendamento}`,
          "_self"
        );
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }

  useEffect(() => {
    setIsLoad(true);

    Municipio.get({ size: 300 })
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

    const idCliente = isCliente ? agendamentoSession?.uuidCliente : null;

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
    isMobile && setIsOpen(false);
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
    cidadeOptions,
    isOpen,
    isCliente,
    iniciarVistoria,
    menuOpen,
    setMenuOpen,
  };
};
