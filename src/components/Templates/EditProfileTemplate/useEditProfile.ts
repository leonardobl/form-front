import React, { useEffect, useRef, useState } from "react";
import { maskCep, maskCnpj, maskCpf, maskPhone } from "../../../utils/masks";
import { toast } from "react-toastify";
import { ISelectOptions } from "../../../types/inputs";
import { IClienteDTO, IClienteForm } from "../../../types/cliente";
import { Ibge } from "../../../services/Ibge";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";
import { RolesEnum } from "../../../enums/roles";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { Cliente } from "../../../services/Cliente";
import { Usuario } from "../../../services/Usuario";
import { IUsuarioCompletoDTO } from "../../../types/usuario";

export const useEditProfile = () => {
  const inpSenhaRef = useRef<HTMLInputElement>(null);
  const inpConfirSenha = useRef<HTMLInputElement>(null);
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [agendamentoSession, setAgendamentoSession] =
    useSessionStorage("agendamentoSession");
  const [token] = useSessionStorage("@token");

  const isAdmGerente = agendamentoSession?.roles?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN || regra === RolesEnum.ROLE_GERENTE
  );

  const isCliente = !!(
    agendamentoSession?.roles?.includes(RolesEnum.ROLE_CLIENTE) && token
  );
  const [formCliente, setFormCliente] = useState<IClienteForm>(
    {} as IClienteForm
  );
  const [formUsuario, setFormUsuario] = useState<IUsuarioCompletoDTO>(
    {} as IUsuarioCompletoDTO
  );

  function checkPass() {
    const pass = inpSenhaRef.current.value;
    const confirm = inpConfirSenha.current.value;

    if (pass !== confirm) {
      inpConfirSenha.current.setCustomValidity("As senhas não conferem");
      return;
    }

    inpConfirSenha.current.setCustomValidity("");
  }

  function getDataUser() {
    setIsLoad(true);
    if (isCliente) {
      Cliente.getByUsuario({ uuidUsuario: agendamentoSession?.uuidUsuario })
        .then(({ data }) => {
          const values: IClienteDTO = {
            ...data,
            telefone: maskPhone(data.telefone),
            cpfCnpj:
              data.cpfCnpj.length > 14
                ? maskCnpj(data.cpfCnpj)
                : maskCpf(data.cpfCnpj),
            endereco: { ...data.endereco, cep: maskCep(data.endereco.cep) },
          };
          setFormCliente(values);
        })
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoad(false));

      return;
    }

    Usuario.getByCpfCnpjCompleto({
      cpfCnpj: agendamentoSession?.usuarioCpfCnpj,
    })
      .then(({ data }) => {
        const values: IUsuarioCompletoDTO = {
          ...data,
          cpfCnpj:
            data.cpfCnpj.length > 14
              ? maskCnpj(data.cpfCnpj)
              : maskCpf(data.cpfCnpj),
          telefone: maskPhone(data.telefone),
        };
        setFormUsuario(values);
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

    getDataUser();
  }, []);

  function handleCep() {
    if (formCliente?.endereco?.cep?.length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(formCliente?.endereco?.cep)
          .then(({ data }) => {
            setFormCliente((prev) => ({
              ...prev,
              endereco: {
                logradouro: data.street,
                bairro: data.neighborhood,
                cidade: data.city,
                uf: data.state,
                cep: formCliente?.endereco?.cep,
              },
            }));
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    if (formCliente?.endereco?.uf) {
      Ibge.CidadesPorEstado({ sigla: formCliente?.endereco?.uf })
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
  }, [formCliente?.endereco?.uf]);

  return {
    formCliente,
    setFormCliente,
    formUsuario,
    setFormUsuario,
    handleCep,
    maskCnpj,
    maskCpf,
    maskPhone,
    checkPass,
    ufOptions,
    cidadesOptions,
    inpSenhaRef,
    inpConfirSenha,
    isAdmGerente,
    isCliente,
  };
};
