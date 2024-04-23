import React, { useEffect, useState } from "react";
import { IClienteForm } from "../../../types/cliente";
import {
  maskCep,
  maskCnpj,
  removerCaracteresEspeciais,
} from "../../../utils/masks";
import { TipoClienteEnum } from "../../../enums/tipoCliente";
import { useContextSite } from "../../../context/Context";
import { Cliente } from "../../../services/Cliente";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ViaCep } from "../../../services/ViaCep";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";

export const useConcessionaire = () => {
  const [form, setForm] = useState<IClienteForm>({} as IClienteForm);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let uuidConcessionaria = searchParams.get("id");
  let concessionariaEdit = searchParams.get("edit");
  const [isReadOnly, setIsReadOnly] = useState(false);

  useEffect(() => {
    if (concessionariaEdit) {
      setIsReadOnly(false);
      return;
    }
  }, [uuidConcessionaria, concessionariaEdit]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IClienteForm = {
      ...form,
      cpfCnpj: removerCaracteresEspeciais(form.cpfCnpj),
      tipo: TipoClienteEnum.CONCESSIONARIA,
    };

    setIsLoad(true);

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");

        setTimeout(() => {
          navigate(-1);
        }, 2000);
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

  function handleCep() {
    if (form?.endereco?.cep?.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(form?.endereco?.cep)
          .then(({ data }) => {
            setForm((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
                cep: form?.endereco?.cep,
              },
            }));
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

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
    if (form?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: form.endereco.uf })
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
  }, [form?.endereco?.uf]);

  return {
    form,
    setForm,
    handleSubmit,
    handleCep,
    cidadesOptions,
    ufOptions,
    maskCnpj,
    maskCep,
    isReadOnly,
  };
};
