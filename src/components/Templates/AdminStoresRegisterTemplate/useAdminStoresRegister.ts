import { useForm, Controller } from "react-hook-form";
import { ILojaDTO, ILojaForm } from "../../../types/loja";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback, useEffect, useState } from "react";
import { Ibge } from "../../../services/Ibge";
import { ISelectOptions } from "../../../types/inputs";
import { toast } from "react-toastify";
import { useContextSite } from "../../../context/Context";
import { ViaCep } from "../../../services/ViaCep";
import { maskCep } from "../../../utils/masks";
import { useSearchParams } from "react-router-dom";
import { Loja } from "../../../services/Lojas";

const schemaIugo = z.object({
  apiToken: z.string().min(1, "Campo obrigatorio"),
  cnpj: z.string().min(1, "Campo obrigatorio"),
  idConta: z.string().min(1, "Campo obrigatorio"),
  nome: z.string().min(1, "Campo obrigatorio"),
});

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
  quantidadeVagas: z.number().gt(0, "O Valor deve ser maior que 0"),
  tempoMedio: z.string().min(1, "Campo obrigatorio"),

  contaIugu: schemaIugo,
  endereco: schemaEndereco,
});

export const useAdminStoresRegister = () => {
  const [ufs, setUfs] = useState<ISelectOptions[]>([] as ISelectOptions[]);
  const [cidades, setCidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [searchParam] = useSearchParams();
  const lojaId = searchParam.get("id");
  const [cidadeTemp, setCidadeTemp] = useState("");
  const { setIsLoad } = useContextSite();
  const [loja, setLoja] = useState<ILojaDTO>({} as ILojaDTO);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ILojaForm>({
    defaultValues: {
      contaIugu: { apiToken: "", cnpj: "", idConta: "", nome: "" },
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
      quantidadeVagas: 0,
      tempoMedio: "",
    },
    mode: "all",
    resolver: zodResolver(schemaForm),
  });

  function submitForm(data: ILojaForm) {
    console.log(data);
  }

  function handleCep() {
    if (watch("endereco.cep").length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(watch("endereco.cep"))
          .then(({ data }) => {
            setValue("endereco.logradouro", data.logradouro);
            setValue("endereco.bairro", data.bairro);
            // setValue("endereco.cidade", data.localidade);
            setValue("endereco.uf", data.uf);
            setCidadeTemp(data.localidade);
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    setValue("endereco.cep", maskCep(watch("endereco.cep")));
  }, [watch("endereco.cep")]);

  const getUfs = useCallback(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((i) => ({
          value: i.sigla,
          label: i.sigla,
          element: i,
        }));

        setUfs(options);
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
    getUfs();
  }, []);

  useEffect(() => {
    if (lojaId) {
      setIsLoad(true);
      Loja.getById({ uuidLoja: lojaId })
        .then(({ data }) => {
          Object.keys(data).forEach((key) => {
            setValue(key as keyof ILojaForm, data[key]);
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

  useEffect(() => {
    if (watch("endereco.uf")) {
      setValue("endereco.cidade", "");
      Ibge.CidadesPorEstado({ sigla: watch("endereco.uf") })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidades(options);
          setValue("endereco.cidade", cidadeTemp);
        })
        .then(() => {
          setCidadeTemp("");
        })
        .catch((erro) => toast.error("Erro ao requisitar a lista de cidades"));
    }
  }, [watch("endereco.uf")]);

  return {
    Controller,
    control,
    handleSubmit,
    errors,
    register,
    submitForm,
    ufs,
    cidades,
    handleCep,
    lojaId,
  };
};
