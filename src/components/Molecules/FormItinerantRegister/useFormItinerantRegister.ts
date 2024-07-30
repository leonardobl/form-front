import { useForm, Controller, useFieldArray } from "react-hook-form";
import { IItineranteForm, IItineranteFormRHF } from "../../../types/itinerante";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ibge } from "../../../services/Ibge";
import { useEffect, useState } from "react";
import { maskCep, maskLimiteNumber, maskTime } from "../../../utils/masks";
import { toast } from "react-toastify";
import { ViaCep } from "../../../services/ViaCep";
import { useContextSite } from "../../../context/Context";
import { ISelectOptions } from "../../../types/inputs";

const enderecoSchema = z.object({
  bairro: z.string().min(1, "Campo obrigatorio"),
  cep: z.string().min(1, "Campo obrigatorio"),
  cidade: z.string().min(1, "Campo obrigatorio"),
  complemento: z.string().optional(),
  logradouro: z.string().min(1, "Campo obrigatorio"),
  numero: z.string().min(1, "Campo obrigatorio"),
  uf: z.string().min(1, "Campo obrigatorio"),
});

const schema = z.object({
  dataRealizacao: z.string().min(1, "Campo obrigatorio"),
  horarioFinal: z.string().min(1, "Campo obrigatorio"),
  horarioFinalAlmoco: z.string().optional(),
  horarioInicial: z.string().min(1, "Campo obrigatorio"),
  horarioInicialAlmoco: z.string().optional(),
  quantidadeVagas: z.string().min(1, "Campo obrigatorio"),
  uuidColaboradores: z.array(z.string()).optional(),
  tempoMedio: z.string().min(1, "Campo obrigatorio"),
  uuidDelivery: z.string().min(1, "Campo obrigatorio"),
  endereco: enderecoSchema,
});

export const useFormItinerantRegister = () => {
  const { setIsLoad } = useContextSite();
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [cidadeTemp, setCidadeTemp] = useState("");
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [data, setData] = useState<Date | null>(null);
  const [active, setActive] = useState(false);

  const { register, watch, control, handleSubmit, setValue } =
    useForm<IItineranteFormRHF>({
      defaultValues: {
        dataRealizacao: "",
        horarioFinal: "",
        horarioFinalAlmoco: "",
        horarioInicial: "",
        horarioInicialAlmoco: "",
        quantidadeVagas: 0 || null,
        uuidColaboradores: [],
        tempoMedio: "",
        uuidDelivery: "",
        endereco: {
          bairro: "",
          cep: "",
          cidade: "",
          complemento: "",
          logradouro: "",
          numero: "",
          uf: "",
        },
      },
      resolver: zodResolver(schema),
      mode: "all",
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "uuidColaboradores",
  });

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
    if (watch("endereco.uf")) {
      setValue("endereco.cidade", "");
      Ibge.CidadesPorEstado({ sigla: watch("endereco.uf") })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
          setValue("endereco.cidade", cidadeTemp);
        })
        .then(() => {
          setCidadeTemp("");
        })
        .catch((erro) => toast.error("Erro ao requisitar a lista de cidades"));
    }
  }, [watch("endereco.uf")]);

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
    if (watch("tempoMedio")) {
      setValue("tempoMedio", maskTime(watch("tempoMedio")));
    }
  }, [watch("tempoMedio")]);

  return {
    Controller,
    register,
    control,
    handleSubmit,
    ufOptions,
    handleCep,
    cidadesOptions,
    data,
    setData,
    active,
    setActive,
    fields,
    append,
    remove,
  };
};
