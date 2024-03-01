import { v4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";
import { toast } from "react-toastify";
import { IClienteForm } from "../../../types/cliente";
import { Cliente } from "../../../services/Cliente";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tipoAtendimento, setTipoAtendimento] = useState<TipoAtendimentoEnum>();
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>();
  const [tipoServico, setTipoServico] = useState<OpcoesServicosEnum>();
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cliente, setCliente] = useState(false);
  const tipoClienteOptions = Object.values(TipoClienteEnum).map((item) => ({
    value: item,
    label: item,
  }));

  function handleSubmitNewClient(e: React.SyntheticEvent) {
    e.preventDefault();

    setIsLoad(true);

    const PAYLOAD: IClienteForm = {
      ...formNewClient,
      cpfCnpj: removerCaracteresEspeciais(formNewClient.cpfCnpj),
      tipo: TipoClienteEnum.PARTICULAR,
    };

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoad(false);
      });
  }

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
    getValues,
    tipoClienteOptions,
    cidadesOptions,
    ufOptions,
  };
};
