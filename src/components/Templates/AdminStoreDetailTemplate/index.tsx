import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useAdminStoreDetail } from "./useAdminStoreDetail";
import { maskLimiteNumber } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";

export const AdminStoreDetailTemplate = () => {
  const {
    Controller,
    control,
    handleSubmit,
    register,
    submitForm,
    ufs,
    contaIugu,
    cidades,
    errors,
  } = useAdminStoreDetail();

  return (
    <S.Container>
      <h1>Dados da Loja</h1>

      {errors?.horarioInicialAlmoco && (
        <p>{errors?.horarioInicialAlmoco.message}</p>
      )}

      <S.Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <h3>Informações Básicas</h3>
        </div>

        <div>
          <Input {...register("nome")} label="Nome" variant={"edit"} required />
        </div>

        <div>
          <Input
            {...register("endereco.cep")}
            label="CEP"
            maxLength={9}
            disabled
          />
        </div>

        <div>
          <Input
            {...register("endereco.logradouro")}
            label="Endereço ( Rua)"
            disabled
          />
        </div>

        <div>
          <Input {...register("endereco.numero")} label="Número" disabled />
        </div>

        <div>
          <Input
            {...register("endereco.complemento")}
            label="Complemento"
            disabled
          />
        </div>

        <div>
          <Input label="Bairro" {...register("endereco.bairro")} disabled />
        </div>

        <div>
          <Controller
            control={control}
            name="endereco.uf"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                value={ufs.find((i) => i.value === value) || null}
                options={ufs}
                label="UF"
                required
                isDisabled
                onChange={(e: ISelectOptions) => onChange(e?.value)}
              />
            )}
          />
        </div>

        <div>
          <Controller
            control={control}
            name="endereco.cidade"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                value={cidades.find((y) => y.value === value) || null}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
                options={cidades}
                label="Cidade"
                required
                isDisabled
              />
            )}
          />
        </div>

        <div>
          <h3>Informações Financeiras</h3>
        </div>

        <S.WrapperDataIugu>
          <div>
            <Input value={contaIugu?.nome} disabled label="Nome" />
          </div>

          <div>
            <Input value={contaIugu?.cnpj} disabled label="CNPJ" />
          </div>

          <div>
            <Input value={contaIugu?.idConta} disabled label="Conta Iugu" />
          </div>
        </S.WrapperDataIugu>

        <div>
          <h3>Informações de Atendimento</h3>
        </div>

        <div>
          <Input
            required
            {...register("tempoMedio")}
            label="Tempo Médio"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <Controller
            control={control}
            name="quantidadeVagas"
            render={({ field: { onChange, value } }) => (
              <Input
                type="number"
                required
                variant={"edit"}
                value={value}
                label="Quantidade de vagas por Horário"
                placeholder="00"
                onChange={(e) => onChange(+maskLimiteNumber(e.target.value, 2))}
              />
            )}
          />
        </div>

        <div>
          <h4>Horário de Atendimento Semanal</h4>
        </div>

        <div>
          <Input
            {...register("horarioInicial")}
            required
            label="Horário Inicial"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <Input
            {...register("horarioFinal")}
            required
            label="Horário Final"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <h4>Intervalo de Almoço</h4>
        </div>

        <div>
          <Input
            {...register("horarioInicialAlmoco")}
            label="Horário Inicial"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <Input
            {...register("horarioFinalAlmoco")}
            label="Horário Final"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <h4>Horário de Atendimento - Sábado</h4>
        </div>

        <div>
          <Input
            {...register("horarioInicialFds")}
            label="Horário Inicial"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <Input
            {...register("horarioFinalFds")}
            label="Horário Final"
            placeholder="hh:mm"
            variant={"edit"}
          />
        </div>

        <div>
          <Button>Salvar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
