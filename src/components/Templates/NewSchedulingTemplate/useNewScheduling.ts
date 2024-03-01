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
  IClienteDTO,
  IVeiculoDTO,
} from "../../../types/agendamento";
import { Loja } from "../../../services/Lojas";
import { Delivery } from "../../../services/Delivery";
import { IConsultaUnionProps } from "../../../types/veiculo";
import { Veiculo } from "../../../services/Veiculo";

const options = [
  {
    label: `Leonardo Bernardo Lima - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
  {
    label: `Leonardo Lima - cpf/cnpj: 014.269.043-04`,
    value: v4(),
  },
  {
    label: `Leonardo - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
];

export const useNewScheduling = () => {
  const { setIsLoad } = useContextSite();
  const [formNewClient, setFormNewClient] = useState<IClienteForm>(
    {} as IClienteForm
  );
  const [formService, setFormSerice] = useState<IConsultaUnionProps>(
    {} as IConsultaUnionProps
  );

  const [diasIndisponiveis, setDiasIndisponiveis] = useState<Date[]>([]);
  const [responseClient, setResponseClient] = useState<IClienteDTO>(
    {} as IClienteDTO
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tipoAtendimento, setTipoAtendimento] = useState<TipoAtendimentoEnum>();
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>();
  const [tipoServico, setTipoServico] = useState<OpcoesServicosEnum>();
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };
  const [isLoading, setIsLoading] = useState(false);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cliente, setCliente] = useState(false);
  const tipoClienteOptions = Object.values(TipoClienteEnum).map((item) => ({
    value: item,
    label: item,
  }));
  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([]);
  const [horariosOptions, setHorariosOptions] = useState<ISelectOptions[]>([]);
  const [formAgendamento, setFormAgendamento] =
    useState<IAgendamentoBasicoForm>({} as IAgendamentoBasicoForm);
  const [dateAgendamento, setDateAgendamento] = useState<Date>(null);
  const hasData = Object.keys(responseClient).some((item) => item);
  const [FormVihacle, setFormVihacle] = useState<IVeiculoDTO>(
    {} as IVeiculoDTO
  );

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
        setResponseClient(data);
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
    }
  }, [formAgendamento?.uuidLoja]);

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
    }
  }, [dateAgendamento]);

  function handlePhone(e: string) {
    const newPhoneValue = maskPhone(e);
    setFormNewClient((prev) => ({ ...prev, telefone: newPhoneValue }));
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

  function handleCep() {
    if (formNewClient?.endereco?.cep?.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(formNewClient?.endereco?.cep)
          .then(({ data }) => {
            setFormNewClient((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.street,
                bairro: data.neighborhood,
                cidade: data.city,
                uf: data.state,
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
  }, [formNewClient?.endereco?.uf]);

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
    const reset = resetValues(formService);
    setFormSerice(reset);
  }, [tipoServico]);

  useEffect(() => {
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

  function getVihacle() {
    // if (!veiculoSession) return;
    // setIsLoad(true);
    // Veiculo.byId({ uuid: veiculoSession })
    //   .then(({ data }) => {
    //     setVeiculo(data);
    //   })
    //   .catch(
    //     ({
    //       response: {
    //         data: { mensagem },
    //       },
    //     }) => {
    //       toast.error(mensagem);
    //     }
    //   )
    //   .finally(() => {
    //     setIsLoad(false);
    //   });
  }

  return {
    handleCep,
    formNewClient,
    setFormNewClient,
    handlePhone,
    handleCpf,
    handleSubmitNewClient,
    options,
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
    hasData,
    diasIndisponiveis,
    dateAgendamento,
    setDateAgendamento,
    responseClient,
    isLoading,
    selectOptions,
  };
};
