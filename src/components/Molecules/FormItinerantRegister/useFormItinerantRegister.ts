import { useForm, Controller, useFieldArray } from "react-hook-form";
import { IItineranteFormRHF } from "../../../types/itinerante";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Ibge } from "../../../services/Ibge";
import { useCallback, useEffect, useState } from "react";
import { maskCep, maskTime } from "../../../utils/masks";
import { toast } from "react-toastify";
import { ViaCep } from "../../../services/ViaCep";
import { useContextSite } from "../../../context/Context";
import { ISelectOptions } from "../../../types/inputs";
import { Itinerante } from "../../../services/Itinerante";
import { Colaborador } from "../../../services/Colaborador";
import { TipoColaboradorEnum } from "../../../enums/tipoColaborador";

const enderecoSchema = z.object({
  bairro: z.string().min(1, "Campo obrigatorio"),
  cep: z.string().min(1, "Campo obrigatorio"),
  cidade: z.string().min(1, "Campo obrigatorio"),
  complemento: z.string().optional(),
  logradouro: z.string().min(1, "Campo obrigatorio"),
  numero: z.string().min(1, "Campo obrigatorio"),
  uf: z.string().min(1, "Campo obrigatorio"),
});

const colaboradoresSchema = z.object({
  value: z.string().min(1, "Campo obrigatorio"),
  label: z.string().min(1, "Campo obrigatorio"),
});

const schema = z.object({
  dataRealizacao: z.string().min(1, "Campo obrigatorio"),
  horarioFinal: z.string().min(5, "O formato do horario deve ser HH:MM"),
  horarioFinalAlmoco: z
    .string()
    .min(5, "O formato do horario deve ser HH:MM")
    .or(z.literal("")),
  horarioInicial: z.string().min(5, "O formato do horario deve ser HH:MM"),
  horarioInicialAlmoco: z
    .string()
    .min(5, "O formato do horario deve ser HH:MM")
    .or(z.literal("")),
  quantidadeVagas: z.string().min(1, "Campo obrigatorio"),
  uuidColaboradores: z
    .array(colaboradoresSchema)
    .nonempty("Deve conter pelo menos um colaborador"),
  tempoMedio: z.string().min(5, "O formato do horario deve ser HH:MM"),
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
  const [unidades, setUnidades] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const [vistoriadores, setVistoriadores] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [active, setActive] = useState(false);

  const {
    register,
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IItineranteFormRHF>({
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

  const getUfs = useCallback(() => {
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

  const getUnidades = useCallback(() => {
    Itinerante.list()
      .then(({ data }) => {
        const unidadesUnicas = data.content.map((i) =>
          JSON.stringify({
            label: i?.delivery?.cidade,
            value: i?.delivery?.uuid,
          })
        );

        const unidadesOptions = unidadesUnicas.map((i) => JSON.parse(i));

        setUnidades(unidadesOptions);
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
    getUnidades();
  }, []);

  function getVistoriadores() {
    Colaborador.listarPorDelivery({
      uuidDelivery: watch("uuidDelivery"),
      tipo: TipoColaboradorEnum.VISTORIADOR,
    }).then(({ data }) => {
      const options = data.map((i) => ({
        value: i.uuid,
        label: i.nome,
        element: i,
      }));

      setVistoriadores(options);
    });
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

  useEffect(() => {
    if (!active) {
      setValue("horarioInicialAlmoco", "");
      setValue("horarioFinalAlmoco", "");
    }
  }, [active]);

  useEffect(() => {
    if (watch("horarioFinalAlmoco")) {
      setValue("horarioFinalAlmoco", maskTime(watch("horarioFinalAlmoco")));
    }
  }, [watch("horarioFinalAlmoco")]);

  useEffect(() => {
    if (watch("horarioInicialAlmoco")) {
      setValue("horarioInicialAlmoco", maskTime(watch("horarioInicialAlmoco")));
    }
  }, [watch("horarioInicialAlmoco")]);

  useEffect(() => {
    if (watch("uuidDelivery")) {
      getVistoriadores();
    }
  }, [watch("uuidDelivery")]);

  return {
    Controller,
    register,
    control,
    handleSubmit,
    ufOptions,
    handleCep,
    cidadesOptions,
    active,
    setActive,
    fields,
    append,
    remove,
    unidades,
    vistoriadores,
    watch,
    errors,
  };
};
