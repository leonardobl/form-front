import React, { useEffect, useRef, useState } from "react";
import { maskCep, maskCnpj, maskCpf, maskPhone } from "../../../utils/masks";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";
import { IClienteForm } from "../../../types/cliente";
import { Ibge } from "../../../services/Ibge";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";

export const useProfile = () => {
  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [form, setForm] = useState<IClienteForm>({} as IClienteForm);

  function checkPass() {
    const pass = inpSenhaRef.current.value;
    const confirm = inpConfirSenha.current.value;

    if (pass !== confirm) {
      inpConfirSenha.current.setCustomValidity("As senhas não conferem");
      return;
    }

    inpConfirSenha.current.setCustomValidity("");
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
          .finally(() => setIsLoad(false));
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
    handleCep,
    handleCpf,
    handlePhone,
    checkPass,
    ufOptions,
    cidadesOptions,
    inpSenhaRef,
    inpConfirSenha,
  };
};
