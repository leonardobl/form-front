import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { InputTime } from "../../Atoms/Inputs/InputTime";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useAdminStoresRegister } from "./useAdminStoresRegister";
import { maskLimiteNumber } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
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
    lojaId,
  } = useAdminStoresRegister();

  return (
    <S.Container>
      <h1>Cadastro de Lojas</h1>

      <S.Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <h3>Informações Básicas</h3>
        </div>

        <div>
          <Input
            data-error={!!errors?.nome}
            {...register("nome")}
            label="Nome"
            required
            variant="edit"
          />
        </div>

        <div>
          <Input
            {...register("endereco.cep")}
            label="CEP"
            onBlur={handleCep}
            maxLength={9}
            disabled={!!lojaId}
          />
        </div>

        <div>
          <Input
            {...register("endereco.logradouro")}
            label="Endereço ( Rua)"
            disabled={!!lojaId}
          />
        </div>

        <div>
          <Input
            {...register("endereco.numero")}
            label="Número"
            disabled={!!lojaId}
          />
        </div>

        <div>
          <Input
            {...register("endereco.complemento")}
            label="Complemento"
            disabled={!!lojaId}
          />
        </div>

        <div>
          <Input
            label="Bairro"
            {...register("endereco.bairro")}
            disabled={!!lojaId}
          />
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
                isDisabled={!!lojaId}
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
                isDisabled={!!lojaId}
              />
            )}
          />
        </div>

        <div>
          <h3>Informações Financeiras</h3>
        </div>

        {lojaId ? (
          <S.WrapperDataIugu>
            <div>
              <Input {...register("contaIugu.nome")} disabled label="Nome" />
            </div>

            <div>
              <Input {...register("contaIugu.cnpj")} disabled label="CNPJ" />
            </div>

            <div>
              <Input
                {...register("contaIugu.idConta")}
                disabled
                label="Conta Iugu"
              />
            </div>
          </S.WrapperDataIugu>
        ) : (
          <div>
            <Controller
              control={control}
              name="contaIugu"
              render={({ field: { value, onChange } }) => (
                <AsyncSimpleSelect
                  label="Conta Iugu"
                  required
                  isDisabled={!!lojaId}
                  onChange={(e: ISelectOptions) => {
                    let iugo = {} as IContaIuguForm;
                    e?.element
                      ? (iugo = {
                          apiToken: e?.element?.apiToken,
                          cnpj: e?.element?.cnpj,
                          idConta: e?.element?.idConta,
                          nome: e?.element?.nome,
                        })
                      : ({} as IContaIuguForm);
                    onChange(iugo);
                  }}
                />
              )}
            />
          </div>
        )}

        <div>
          <h3>Informações de Atendimento</h3>
        </div>

        <div>
          <Controller
            control={control}
            name="tempoMedio"
            render={({ field: { onChange, value } }) => (
              <Input
                type="number"
                required
                value={value}
                label="Tempo Médio"
                placeholder="mm"
                onChange={(e) => onChange(maskLimiteNumber(e.target.value, 2))}
              />
            )}
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
