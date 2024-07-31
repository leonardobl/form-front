import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputCheckSlide } from "../../Atoms/Inputs/InputCheckSlide";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { Table } from "../Table";
import { useFormItinerantRegister } from "./useFormItinerantRegister";
import { ISelectOptions } from "../../../types/inputs";
import dayjs from "dayjs";
import { ComponentProps } from "react";
import { IItineranteFormRHF } from "../../../types/itinerante";

interface IFormItinerantRegister extends ComponentProps<"form"> {
  onSubmitForm: (data: IItineranteFormRHF) => void;
}

export const FormItinerantRegister = ({
  onSubmitForm,
  ...rest
}: IFormItinerantRegister) => {
  const {
    Controller,
    control,
    handleSubmit,
    vistoriadores,
    register,
    unidades,
    cidadesOptions,
    handleCep,
    ufOptions,
    active,
    setActive,
    append,
    fields,
    remove,
    watch,
    errors,
  } = useFormItinerantRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <h2>Endereço de Realização</h2>
      </div>

      <div>
        <Input
          {...register("endereco.cep")}
          required
          label="CEP"
          onBlur={handleCep}
          maxLength={9}
        />
      </div>
      <div>
        <Input
          {...register("endereco.logradouro")}
          required
          label="Endereço (Rua)"
        />
      </div>
      <div>
        <Input
          {...register("endereco.numero")}
          required
          label="Número"
          type="number"
        />
      </div>
      <div>
        <Input {...register("endereco.complemento")} label="Complemento" />
      </div>
      <div>
        <Input {...register("endereco.bairro")} required label="Bairro" />
      </div>

      <div>
        <Controller
          control={control}
          name="endereco.uf"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={ufOptions}
              value={ufOptions.find((i) => i.value === value) || null}
              required
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
              label="UF"
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="endereco.cidade"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={cidadesOptions}
              value={cidadesOptions.find((i) => i.value === value) || null}
              required
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
              label="Cidade"
            />
          )}
        />
      </div>

      <div>
        <h2>Unidade Responsável</h2>
      </div>

      <div>
        <Controller
          control={control}
          name="uuidDelivery"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={unidades}
              value={unidades.find((i) => i.value === value) || null}
              required
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
              label="Unidade"
            />
          )}
        />
      </div>

      <div>
        <h2>Dados para Agendamento</h2>
      </div>

      <div>
        <Controller
          control={control}
          name="dataRealizacao"
          render={({ field: { onChange, value } }) => (
            <InputDate
              required
              showIcon
              selected={value ? dayjs(value).toDate() : null}
              placeholderText="___/___/___"
              label="Data de Realização"
              minDate={new Date()}
              onChange={(e) => {
                e ? onChange(dayjs(e)?.format("YYYY-MM-DD")) : onChange("");
              }}
            />
          )}
        />
      </div>

      <div>
        <Input
          {...register("horarioInicial")}
          required
          label="Horário Inicial"
          placeholder="HH:MM"
        />

        {errors?.horarioInicial && (
          <S.Erro>{errors?.horarioInicial?.message}</S.Erro>
        )}
      </div>

      <div>
        <Input
          {...register("horarioFinal")}
          required
          label="Horário Final"
          placeholder="HH:MM"
        />

        {errors?.horarioFinal && (
          <S.Erro>{errors?.horarioFinal?.message}</S.Erro>
        )}
      </div>

      <div>
        <Input
          {...register("tempoMedio")}
          required
          label="Tempo Médio"
          placeholder="HH:MM"
        />

        {errors?.tempoMedio && <S.Erro>{errors?.tempoMedio?.message}</S.Erro>}
      </div>

      <div>
        <Input
          {...register("quantidadeVagas")}
          required
          type="number"
          label="Quantidade de Vagas por Horário"
          placeholder="00"
        />
      </div>

      <div>
        <InputCheckSlide
          checked={active}
          label="Horário de Almoço"
          placeholder="HH:MM"
          onChange={() => {
            setActive((prev) => !prev);
          }}
        />
      </div>

      <div>
        <Input
          {...register("horarioInicialAlmoco")}
          disabled={!active}
          label="Horário Inicial"
          placeholder="HH:MM"
        />

        {errors?.horarioInicialAlmoco && (
          <S.Erro>{errors?.horarioInicialAlmoco?.message}</S.Erro>
        )}
      </div>

      <div>
        <Input
          {...register("horarioFinalAlmoco")}
          disabled={!active}
          label="Horário Final"
          placeholder="HH:MM"
        />

        {errors?.horarioFinalAlmoco && (
          <S.Erro>{errors?.horarioFinalAlmoco?.message}</S.Erro>
        )}
      </div>

      <div>
        <h2>Vistoriadores</h2>
      </div>

      <div>
        <SimpleSelect
          options={vistoriadores}
          variant="search"
          value={null}
          key={watch("uuidDelivery")}
          label="Vistoriador"
          onChange={(e: ISelectOptions) => {
            const hasItem = fields?.some((i) => i?.value === e?.value);
            !hasItem && append(e);
          }}
        />

        {errors?.uuidColaboradores && (
          <S.Erro>{errors.uuidColaboradores.message}</S.Erro>
        )}
      </div>

      <div>
        <Table.WrapperItems>
          {fields.length > 0 &&
            fields?.map((i, idx) => (
              <Table.Item
                columns="1fr .2fr"
                values={[i?.label]}
                lastElement={
                  <img
                    src="/assets/svgs/icon-trash-red.svg"
                    alt="icone lixeira"
                    onClick={() => {
                      remove(idx);
                    }}
                  />
                }
              />
            ))}
        </Table.WrapperItems>
      </div>

      <div>
        <Button>Cadastrar</Button>
      </div>
    </S.Form>
  );
};
