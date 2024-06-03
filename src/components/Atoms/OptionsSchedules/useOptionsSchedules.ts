import {
  IAgendamentoDTO,
  IAgendamentoIniciarForm,
  IIniciarAgendamentoProps,
} from "./../../../types/agendamento.d";
import React, { useCallback, useEffect, useState } from "react";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";
import { ISelectOptions } from "../../../types/inputs";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Colaborador } from "../../../services/Colaborador";
import { TipoColaboradorEnum } from "../../../enums/tipoColaborador";
import { Loja } from "../../../services/Lojas";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { IColaboradorCompletoDTO } from "../../../types/colaborador";

const RESOLCES = ["ATRIBUIR_VISTORIA", "ADMIN"];

interface IModalProps {
  open: boolean;
  agendamento?: IAgendamentoDTO;
  formStar?: IAgendamentoIniciarForm;
}

export const useOptionsSchedules = () => {
  const [usuario, setUsuario] = useSessionStorage("cliente");
  const isCliente = !!usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const [baitasOptions, setBaiaOptions] = useState<ISelectOptions[]>([]);
  const [vistoriadoresOptions, setVistoriadoresOptions] = useState<
    ISelectOptions[]
  >([]);
  const { setIsLoad } = useContextSite();

  const isAdmin = RESOLCES.some(
    (item) => item === "ATRIBUIR_VISTORIA" || item === "ADMIN"
  );
  const [modalStart, setModalStart] = useState<IModalProps>({
    open: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const disabled =
    isCliente ||
    !RESOLCES.some((item) => item === "ATRIBUIR_VISTORIA" || item === "ADMIN");
  const [modalAtribuir, setModalAtribuir] = useState<IModalProps>({
    open: false,
  });

  const [colaboradorAtual, setColaboradorAtual] =
    useState<IColaboradorCompletoDTO>({} as IColaboradorCompletoDTO);

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
          toast.error(mensagem);
        }
      );
  }, []);

  useEffect(() => {
    getColaboradorAtual();
  }, [getColaboradorAtual]);

  useEffect(() => {
    if (modalAtribuir?.open) {
      Colaborador.listarPorDelivery({
        tipo: TipoColaboradorEnum.VISTORIADOR,
        uuidDelivery: modalAtribuir?.agendamento?.delivery?.uuid,
      }).then(({ data }) => {
        const options = data.map((item) => ({
          value: item.uuid,
          label: item.nome,
          element: item,
        }));

        setVistoriadoresOptions(options);
      });
    }
  }, [modalAtribuir?.open]);

  useEffect(() => {
    if (modalStart?.open) {
      if (
        modalStart?.agendamento?.tipoAtendimento ===
        TipoAtendimentoEnum.DOMICILIO
      ) {
        Colaborador.listarPorDelivery({
          tipo: TipoColaboradorEnum.VISTORIADOR,
          uuidDelivery: modalStart?.agendamento?.delivery?.uuid,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item.uuid,
            label: item.nome,
            element: item,
          }));

          setVistoriadoresOptions(options);
        });

        return;
      }

      if (modalStart?.agendamento?.tipoAtendimento === TipoAtendimentoEnum.LOJA)
        Colaborador.listarPorLoja({
          tipo: TipoColaboradorEnum.VISTORIADOR,
          disponivel: true,
          uuidLoja: modalStart?.agendamento?.loja?.uuid,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item.uuid,
            label: item.nome,
            element: item,
          }));

          setVistoriadoresOptions(options);
        });

      Loja.getBaiasLivres({
        uuid: modalStart?.agendamento?.loja?.uuid,
      }).then(({ data }) => {
        const options = data.map((item) => ({
          value: item.uuid,
          label: item.nome,
        }));
        setBaiaOptions(options);
      });
    }
  }, [modalStart?.open]);

  function iniciarVistoria(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IIniciarAgendamentoProps = {
      uuid: modalStart?.agendamento?.uuid,
      uuidBaia: modalStart?.formStar?.uuidBaia,
      uuidVistoriador: modalStart?.formStar?.uuidVistoriador,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);
    Agendamento.iniciar(PAYLOAD)
      .then(({ data }) => {
        toast.success("Agendamento iniciado");
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
        setModalStart({ open: false });
      });
  }

  function atribuirAgendamento(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IIniciarAgendamentoProps = {
      uuid: modalAtribuir?.agendamento?.uuid,
      uuidVistoriador: modalAtribuir?.formStar?.uuidVistoriador,
      uuidAtendente: colaboradorAtual?.uuid,
    };

    setIsLoad(true);

    Agendamento.atribuir(PAYLOAD)
      .then(() => {
        toast.success("Agendamento atribuido com sucesso!");
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
    isCliente,
    isOpen,
    setIsOpen,
    disabled,
    isAdmin,
    modalAtribuir,
    setModalAtribuir,
    baitasOptions,
    vistoriadoresOptions,
    modalStart,
    setModalStart,
    iniciarVistoria,
    atribuirAgendamento,
  };
};
