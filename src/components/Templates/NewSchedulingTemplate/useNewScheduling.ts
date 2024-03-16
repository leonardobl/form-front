import { v4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";
import { toast } from "react-toastify";
import { IClienteForm } from "../../../types/cliente";
import { Cliente } from "../../../services/Cliente";
import { addDays } from "date-fns";
import {
  maskCnpj,
  maskCpf,
  maskPhone,
  removerCaracteresEspeciais,
} from "../../../utils/masks";
import { TipoClienteEnum } from "../../../enums/tipoCliente";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";
import { ISelectOptions } from "../../../types/inputs";
import { Ibge } from "../../../services/Ibge";
import { resetValues } from "../../../utils/resetObject";
import {
  IAgendamentoBasicoForm,
  IAgendamentoDTO,
  IAtendimentoDomiciliarForm,
  IClienteDTO,
  IVeiculoDTO,
} from "../../../types/agendamento";
import { Loja } from "../../../services/Lojas";
import { Delivery } from "../../../services/Delivery";
import { IConsultaUnionProps } from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";
import {
  Agendamento,
  IPutAgendamentoProps,
} from "../../../services/Agendamento";
import { useNavigate } from "react-router-dom";
import { Pagamento } from "../../../services/Pagamento";

export const useNewScheduling = () => {
  const { setIsLoad } = useContextSite();
  const [formNewClient, setFormNewClient] = useState<IClienteForm>(
    {} as IClienteForm
  );
  const [formService, setFormSerice] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );
  const navigate = useNavigate();
  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tipoAtendimento, setTipoAtendimento] = useState<TipoAtendimentoEnum>();
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const [tipoServico, setTipoServico] = useState<OpcoesServicosEnum>();
  const getValues = async (txt: string) => {
    return Cliente.lista({ nomeCpfCnpj: txt, page: 0, size: 5 }).then(
      ({ data }) =>
        data.content.map((item) => ({
          value: item.uuid,
          label: `${item.nome} - CPF/CNPJ: ${item.cpfCnpj}`,
          element: item,
        }))
    );
  };
  const [formAddress, setFormAddress] = useState<IAtendimentoDomiciliarForm>(
    {} as IAtendimentoDomiciliarForm
  );
  const [isLoading, setIsLoading] = useState(false);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cliente, setCliente] = useState<IClienteDTO>({} as IClienteDTO);
  const [swapClient, setSwapClient] = useState<IClienteDTO>({} as IClienteDTO);
  const tipoClienteOptions = Object.values(TipoClienteEnum).map((item) => ({
    value: item,
    label: item,
  }));
  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [formAgendamento, setFormAgendamento] =
    useState<IAgendamentoBasicoForm>({} as IAgendamentoBasicoForm);
  const [dateAgendamento, setDateAgendamento] = useState<Date>(null);
  const [disabled, setDisabled] = useState(false);

  const [formVihacle, setFormVihacle] = useState<IVeiculoDTO>(
    {} as IVeiculoDTO
  );

  useEffect(() => {
    const hasAgendamento =
      formAgendamento.uuidDelivery || formAgendamento.uuidDelivery;

    if (tipoAtendimento === TipoAtendimentoEnum.DOMICILIO) {
      const addrValid =
        formAddress?.nome &&
        formAddress?.telefone &&
        formAddress?.endereco?.bairro &&
        formAddress?.endereco?.cep &&
        formAddress?.endereco?.cidade &&
        formAddress?.endereco?.logradouro &&
        formAddress?.endereco?.numero &&
        formAddress?.endereco?.uf;

      setDisabled(!formVihacle?.uuid && !hasAgendamento && !addrValid);
      return;
    }

    setDisabled(!formVihacle?.uuid && !hasAgendamento);
  }, [formVihacle, formAgendamento, formAddress, tipoAtendimento]);

  function handleSubmitNewClient(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IClienteForm = {
      ...formNewClient,
      cpfCnpj: removerCaracteresEspeciais(formNewClient.cpfCnpj),
      tipo: TipoClienteEnum.PARTICULAR,
    };

    Cliente.post(PAYLOAD)
      .then(({ data }) => {
        setModalIsOpen(false);
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoad(false);
      });
  }

  useEffect(() => {
    setDateAgendamento(null);
    if (formAgendamento?.uuidLoja) {
      setIsLoading(true);
      Loja.getDiasIndisponiveis({ uuidLoja: formAgendamento.uuidLoja })
        .then(({ data }) => {
          const options = data.map((item) => addDays(new Date(item), 1));

          setDiasIndisponiveis(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoading(false));
      return;
    }

    if (formAgendamento?.uuidDelivery) {
      Delivery.getDiasIndisponiveis({
        uuidDelivery: formAgendamento.uuidDelivery,
      })
        .then(({ data }) => {
          const options = data.map((item) => addDays(new Date(item), 1));

          setDiasIndisponiveis(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoading(false));
    }
  }, [formAgendamento?.uuidLoja, formAgendamento?.uuidDelivery]);

  useEffect(() => {
    setFormAgendamento((prev) => ({ ...prev, horaAgendada: null }));
    if (dateAgendamento) {
      const newDate = dateAgendamento
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-");

      if (formAgendamento?.uuidLoja) {
        Loja.getHorariosDisponiveis({
          uuidLoja: formAgendamento?.uuidLoja,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }

      if (formAgendamento?.uuidDelivery) {
        Delivery.getHorariosDisponiveis({
          uuidDelivery: formAgendamento?.uuidDelivery,
          dataAgendamento: newDate,
        }).then(({ data }) => {
          const options = data.map((item) => ({
            value: item,
            label: item,
            element: item,
          }));

          setHorariosOptions(options);
        });
      }
    }
  }, [dateAgendamento]);

  function handlePhone({ e, setForms }: { e: string; setForms: any }) {
    const newPhoneValue = maskPhone(e);
    setForms((prev) => ({ ...prev, telefone: newPhoneValue }));
  }

  function handleCpf(e: string) {
    let newvalue = "";

    if (e?.length > 14) {
      newvalue = maskCnpj(e);
      setFormNewClient((prev) => ({ ...prev, cpfCnpj: newvalue }));
      return;
    }

    newvalue = maskCpf(e);
    setFormNewClient((prev) => ({ ...prev, cpfCnpj: newvalue }));
  }

  async function saveAgendamento() {
    setIsLoad(true);
    setDisabled(true);

    const PAYLOAD: IPutAgendamentoProps = {
      ...agendamento,
      uuidVeiculo: formVihacle?.uuid,
      uuidCliente: cliente?.uuid,
    };

    try {
      await Agendamento.put(PAYLOAD);

      Pagamento.gerarFatura({
        uuidAgendamento: agendamento?.uuid,
        formaPagamento: tipoPagamento,
      })
        .then(() =>
          navigate(
            `/agendamento/${
              agendamento?.uuid
            }/pagamento/${tipoPagamento.toLowerCase()}`
          )
        )
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => {
            toast.error(mensagem);
            setDisabled(false);
          }
        );
    } catch (error) {
      toast.error(error.mensagem);
      setDisabled(false);
    } finally {
      setIsLoad(false);
    }
  }

  function handleCep(forms: any, setForms: any) {
    if (forms?.endereco?.cep?.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(forms?.endereco?.cep)
          .then(({ data }) => {
            setForms((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
                cep: formNewClient?.endereco?.cep,
              },
            }));
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    if (formNewClient?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: formNewClient.endereco.uf })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
        })
        .catch((erro) => toast.error("Erro ao requisitar as cidades"));
    }

    if (formAddress?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: formAddress?.endereco?.uf })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
        })
        .catch((erro) => toast.error("Erro ao requisitar as cidades"));
    }
  }, [formNewClient?.endereco?.uf, formAddress?.endereco?.uf]);

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  useEffect(() => {
    if (!modalIsOpen) {
      const reset = resetValues(formNewClient);
      setFormNewClient(reset);
    }
  }, [modalIsOpen]);

  useEffect(() => {
    resetServicos();
    resetVihacle();
  }, [tipoServico]);

  function resetServicos() {
    const reset = resetValues(formService);
    setFormSerice(reset);
  }

  function resetVihacle() {
    const reset = resetValues(formVihacle);
    setFormVihacle(reset);
  }

  function resetCliente() {
    const reset = resetValues(swapClient);
    setSwapClient(reset);
    setCliente(reset);

    resetServicos();
    resetAtendimento();
  }

  function resetAtendimento() {
    const reset = resetValues(formAgendamento);
    setFormAgendamento(reset);
    setDateAgendamento(null);

    if (tipoAtendimento === TipoAtendimentoEnum.DOMICILIO) {
      const reset = resetValues(formAddress);
      setFormAddress(reset);
    }
  }

  async function handleSubmitAgendamento(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD_AGENDAMENTO: IAgendamentoBasicoForm = {
      ...formAgendamento,
      tipoAtendimento: tipoAtendimento,
      diaAgendado: dateAgendamento
        ?.toLocaleDateString()
        ?.split("/")
        ?.reverse()
        ?.join("-"),
    };

    try {
      const dataAgendamento = await Agendamento.post(PAYLOAD_AGENDAMENTO);
      setAgendamento(dataAgendamento.data);

      if (tipoAtendimento === TipoAtendimentoEnum.DOMICILIO) {
        await Agendamento.putAddress(formAddress);
      }

      let veiculo = null;
      if (tipoServico === OpcoesServicosEnum.EMPLACAMENTO) {
        const PAYLOAD_VEICULO = {
          Chassi: formService.Chassi,
          CnpjECV: null,
          IdCidadeDetran: null,
          uuidAgendamento: dataAgendamento?.data.uuid,
        };
        veiculo = await Veiculo.postByChassi(PAYLOAD_VEICULO);
      }

      if (tipoServico === OpcoesServicosEnum.VISTORIA) {
        const PAYLOAD_VEICULO = {
          Placa: formService.Placa,
          CnpjECV: null,
          IdCidadeDetran: null,
          Renavam: formService.Renavam,
          uuidAgendamento: dataAgendamento?.data?.uuid,
        };

        veiculo = await Veiculo.postByPlaca(PAYLOAD_VEICULO);
      }

      setFormVihacle(veiculo?.data);
    } catch (error) {
      toast.error(error.mensagem);
    } finally {
      setIsLoad(false);
    }
  }

  useEffect(() => {
    resetAtendimento();
    resetVihacle();
    resetServicos();

    if (tipoAtendimento === TipoAtendimentoEnum.LOJA) {
      Loja.get()
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            label: item.nome,
            value: item.uuid,
            element: item,
          }));

          setSelectOptions(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }

    if (tipoAtendimento === TipoAtendimentoEnum.DOMICILIO) {
      Delivery.get()
        .then(({ data }) => {
          const options = data.content.map((item) => ({
            value: item.uuid,
            label: item.cidade,
            element: item,
          }));

          setSelectOptions(options);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }
  }, [tipoAtendimento]);

  function handleClient(e: React.SyntheticEvent) {
    e.preventDefault();
    setCliente(swapClient);
  }

  return {
    handleSubmitAgendamento,
    handleCep,
    formNewClient,
    setFormNewClient,
    handlePhone,
    handleCpf,
    formVihacle,
    handleSubmitNewClient,
    modalIsOpen,
    setModalIsOpen,
    tipoAtendimento,
    setTipoAtendimento,
    tipoPagamento,
    setTipoPagamento,
    tipoServico,
    setTipoServico,
    cliente,
    setCliente,
    handleClient,
    formService,
    setFormSerice,
    getValues,
    horariosOptions,
    setHorariosOptions,
    formAgendamento,
    setFormAgendamento,
    tipoClienteOptions,
    cidadesOptions,
    ufOptions,
    saveAgendamento,
    disabled,
    setSwapClient,
    diasIndisponiveis,
    dateAgendamento,
    setDateAgendamento,
    isLoading,
    selectOptions,
    resetCliente,
    formAddress,
    setFormAddress,
  };
};
