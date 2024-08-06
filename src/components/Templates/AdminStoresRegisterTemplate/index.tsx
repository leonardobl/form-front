import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useAdminStoresRegister } from "./useAdminStoresRegister";
import { maskCnpj, maskLimiteNumber } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";
import { IContaIuguForm } from "../../../types/loja";

export const AdminStoresRegisterTemplate = () => {
  const {
    Controller,
    control,
    errors,
    handleSubmit,
    register,
    submitForm,
    ufs,
    cidades,
    handleCep,
    contas,
    watch,
  } = useAdminStoresRegister();

  return (
    <S.Container>
      <h1>Cadastro de Lojas</h1>

      <S.Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <h3>Informações Básicas</h3>
        </div>

        <div>
          <Input {...register("nome")} label="Nome" required />
        </div>

        <div>
          <Input
            {...register("endereco.cep")}
            label="CEP"
            onBlur={handleCep}
            maxLength={9}
          />
        </div>

        <div>
          <Input {...register("endereco.logradouro")} label="Endereço ( Rua)" />
        </div>

        <div>
          <Input {...register("endereco.numero")} label="Número" />
        </div>

        <div>
          <Input {...register("endereco.complemento")} label="Complemento" />
        </div>

        <div>
          <Input label="Bairro" {...register("endereco.bairro")} />
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
              />
            )}
          />
        </div>

        <div>
          <h3>Informações Financeiras</h3>
        </div>

        <div>
          <Controller
            control={control}
            name="uuidContaIugu"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                label="Conta Iugu"
                required
                options={contas}
                value={contas.find((i) => i?.value === value) || null}
                onChange={(e: ISelectOptions) => {
                  onChange(e?.value);
                }}
              />
            )}
          />
        </div>

        <div>
          <h3>Informações de Atendimento</h3>
        </div>

        <div>
          <Input
            required
            {...register("tempoMedio")}
            label="Tempo Médio"
            placeholder="hh:mm"
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
                value={value}
                label="Quantidade de vagas por Horário"
                placeholder="00"
                onChange={(e) => onChange(maskLimiteNumber(e.target.value, 2))}
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
          />
        </div>

        <div>
          <Input
            {...register("horarioFinal")}
            required
            label="Horário Final"
            placeholder="hh:mm"
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
          />
        </div>

        <div>
          <Input
            {...register("horarioFinalAlmoco")}
            label="Horário Final"
            placeholder="hh:mm"
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
          />
        </div>

        <div>
          <Input
            {...register("horarioFinalFds")}
            label="Horário Final"
            placeholder="hh:mm"
          />
        </div>

        <div>
          <Button>Salvar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
