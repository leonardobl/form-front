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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";

const RESOLCES = ["ATRIBUIR_VISTORIA", "ADMIN"];

interface IModalProps {
  open: boolean;
  agendamento?: IAgendamentoDTO;
  formStar?: IAgendamentoIniciarForm;
}

const schema = z.object({
  uuidAtendente: z.string().min(1).or(z.literal("")),
  uuidBaia: z.string().min(1).or(z.literal("")),
  uuidVistoriador: z.string().min(1).or(z.literal("")),
  uuid: z.string().min(1).or(z.literal("")),
});

export const useOptionsSchedules = () => {
  const { control, handleSubmit, reset, setValue } =
    useForm<IIniciarAgendamentoProps>({
      defaultValues: {
        uuidAtendente: "",
        uuidBaia: "",
        uuidVistoriador: "",
        uuid: "",
      },
      resolver: zodResolver(schema),
    });

  const [usuario, setUsuario] = useSessionStorage("cliente");
  const isCliente = !!usuario?.roles?.includes(RolesEnum.ROLE_CLIENTE);
  const [baitasOptions, setBaiaOptions] = useState<ISelectOptions[]>([]);
  const [vistoriadoresOptions, setVistoriadoresOptions] = useState<
    ISelectOptions[]
  >([]);

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

  useEffect(() => {
    reset();
    if (modalAtribuir?.open) {
      setValue("uuid", modalAtribuir?.agendamento?.uuid);
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
    reset();
    if (modalStart?.open) {
      setValue("uuid", modalStart?.agendamento?.uuid);
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
    Controller,
    control,
    handleSubmit,
    reset,
    setValue,
  };
};
