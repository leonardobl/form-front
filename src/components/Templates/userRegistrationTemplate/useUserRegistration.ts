import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Ibge } from "../../../services/Ibge";
import { ViaCep } from "../../../services/ViaCep";
import {
  maskCep,
  maskCnpj,
  maskCpf,
  maskPhone,
  removerCaracteresEspeciais,
} from "../../../utils/masks";
import { Cliente } from "../../../services/Cliente";
import { TipoClienteEnum } from "../../../enums/tipoCliente";
import { IClienteForm } from "../../../types/cliente";
import { ISelectOptions } from "../../../types/inputs";
import { useContextSite } from "../../../context/Context";

export const useUserRegistration = () => {
  const [form, setForm] = useState<IClienteForm>({} as IClienteForm);
  const { setIsLoad } = useContextSite();
  const [isDisabled, setIsDisabled] = useState(false);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [cepLoad, setCepLoad] = useState(false);

  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const PAYLOAD: IClienteForm = {
      ...form,
      cpfCnpj: removerCaracteresEspeciais(form.cpfCnpj),
      tipo: TipoClienteEnum.PARTICULAR,
    };

    console.log(PAYLOAD);
    return;

    setIsLoad(true);
    setIsDisabled(true);

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");
        setTimeout(() => {
          window.open("/login", "_self");
        }, 3000);
      })
      .catch((error) => toast.error(error?.message))
      .finally(() => {
        setIsLoad(false);
        setIsDisabled(false);
      });
  }

  function checkPass() {
    const pass = inpSenhaRef?.current?.value;
    const confirm = inpConfirSenha?.current?.value;

    if (pass !== confirm) {
      inpConfirSenha.current.setCustomValidity("As senhas não conferem");
      return;
    }

    inpConfirSenha?.current?.setCustomValidity("");
  }

  function handlePhone(e: string) {
    const newPhoneValue = maskPhone(e);
    setForm((prev) => ({ ...prev, telefone: newPhoneValue }));
  }

  function handleCpf(e: string) {
    let newvalue = "";

    if (e?.length > 14) {
      newvalue = maskCnpj(e);
      setForm((prev) => ({ ...prev, cpfCnpj: newvalue }));
      return;
    }

    newvalue = maskCpf(e);
    setForm((prev) => ({ ...prev, cpfCnpj: newvalue }));
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

  function handleCep(e: string) {
    const newCepValue = maskCep(e);

    if (newCepValue.length === 9) {
      setCepLoad(true);
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(e)
          .then(({ data }) => {
            setForm((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.street,
                bairro: data.neighborhood,
                cidade: data.city,
                uf: data.state,
                cep: newCepValue,
              },
            }));
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => {
            setIsLoad(false);
            setCepLoad(false);
          });
      }, 1000);

      return;
    }

    setForm((prev) => ({
      ...prev,
      endereco: { ...prev.endereco, cep: newCepValue },
    }));
  }

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
    handleCpf,
    handlePhone,
    handleCep,
    cidadesOptions,
    ufOptions,
    cepLoad,
    checkPass,
    handleSubmit,
    inpSenhaRef,
    inpConfirSenha,
  };
};
