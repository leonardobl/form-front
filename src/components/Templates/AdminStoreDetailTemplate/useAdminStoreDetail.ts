import { useForm, Controller } from "react-hook-form";
import { IContaIuguDTO, ILojaAtualizarFormProps } from "../../../types/loja";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { maskCep, maskTime } from "../../../utils/masks";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loja } from "../../../services/Lojas";

const schemaEndereco = z.object({
  bairro: z.string().optional(),
  cep: z.string().optional(),
  cidade: z.string().min(1, "Campo obrigatorio"),
  complemento: z.string().optional(),
  logradouro: z.string().optional(),
  numero: z.string().optional(),
  uf: z.string().min(1, "Campo obrigatorio"),
});

const schemaForm = z.object({
  horarioFinal: z.string().min(1, "Campo obrigatorio"),
  horarioFinalAlmoco: z.string().optional(),
  horarioFinalFds: z.string().optional(),
  horarioInicial: z.string().min(1, "Campo obrigatorio"),
  horarioInicialAlmoco: z.string().optional(),
  horarioInicialFds: z.string().optional(),
  nome: z.string().min(1, "Campo obrigatorio"),
  quantidadeVagas: z.number().min(1, "Campo obrigatorio"),
  tempoMedio: z.string().min(1, "Campo obrigatorio"),
  endereco: schemaEndereco,
});

export const useAdminStoreDetail = () => {
  const [ufs, setUfs] = useState<ISelectOptions[]>([] as ISelectOptions[]);
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lojaId = searchParams.get("id");
  const [contaIugu, setContaIugu] = useState<IContaIuguDTO>(
    {} as IContaIuguDTO
  );

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ILojaAtualizarFormProps>({
    defaultValues: {
      endereco: {
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        logradouro: "",
        numero: "",
        uf: "",
      },
      horarioFinal: "",
      horarioFinalAlmoco: "",
      horarioFinalFds: "",
      horarioInicial: "",
      horarioInicialAlmoco: "",
      horarioInicialFds: "",
      nome: "",
      quantidadeVagas: null,
      tempoMedio: "",
    },
    mode: "all",
    resolver: zodResolver(schemaForm),
  });

  function submitForm(data: ILojaAtualizarFormProps) {
    setIsLoad(true);

    const PAYLOAD: ILojaAtualizarFormProps = {
      ...data,
      uuidLoja: lojaId,
      quantidadeVagas: Number(data.quantidadeVagas),
    };

    Loja.atualizar(PAYLOAD)
      .then(() => navigate("/configuracoes/lojas"))
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
    setValue("endereco.cep", maskCep(watch("endereco.cep")));
  }, [watch("endereco.cep")]);

  useEffect(() => {
    if (watch("horarioInicial")) {
      setValue("horarioInicial", maskTime(watch("horarioInicial")));
    }
  }, [watch("horarioInicial")]);

  useEffect(() => {
    if (watch("horarioFinal")) {
      setValue("horarioFinal", maskTime(watch("horarioFinal")));
    }
  }, [watch("horarioFinal")]);

  useEffect(() => {
    if (watch("horarioInicialAlmoco")) {
      setValue("horarioInicialAlmoco", maskTime(watch("horarioInicialAlmoco")));
    }
  }, [watch("horarioInicialAlmoco")]);

  useEffect(() => {
    if (watch("horarioFinalAlmoco")) {
      setValue("horarioFinalAlmoco", maskTime(watch("horarioFinalAlmoco")));
    }
  }, [watch("horarioFinalAlmoco")]);

  useEffect(() => {
    if (watch("horarioInicialFds")) {
      setValue("horarioInicialFds", maskTime(watch("horarioInicialFds")));
    }
  }, [watch("horarioInicialFds")]);

  useEffect(() => {
    if (watch("horarioFinalFds")) {
      setValue("horarioFinalFds", maskTime(watch("horarioFinalFds")));
    }
  }, [watch("horarioFinalFds")]);

  useEffect(() => {
    if (watch("tempoMedio")) {
      setValue("tempoMedio", maskTime(watch("tempoMedio")));
    }
  }, [watch("tempoMedio")]);

  useEffect(() => {
    if (lojaId) {
      setIsLoad(true);
      Loja.getById({ uuidLoja: lojaId })
        .then(({ data }) => {
          setCidades([
            { value: data.endereco.cidade, label: data.endereco.cidade },
          ]);

          setUfs([{ value: data.endereco.uf, label: data.endereco.uf }]);

          setContaIugu(data.contaIugu);

          Object.keys(data).forEach((key) => {
            setValue(key as keyof ILojaAtualizarFormProps, data[key]);
          });
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
  }, [lojaId]);

  return {
    Controller,
    control,
    handleSubmit,
    errors,
    register,
    submitForm,
    ufs,
    cidades,
    watch,
    contaIugu,
  };
};
