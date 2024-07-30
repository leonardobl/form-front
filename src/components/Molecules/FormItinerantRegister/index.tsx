import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputCheckSlide } from "../../Atoms/Inputs/InputCheckSlide";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { Button } from "../../Atoms/Button";
import { Table } from "../Table";
import { useFormItinerantRegister } from "./useFormItinerantRegister";
import { ISelectOptions } from "../../../types/inputs";
import dayjs from "dayjs";

const VALUES = [
  ["ESTÁCIO NETO"],
  ["KLEBER ALMENDRA"],
  ["JUNIOR OLIVEIRA MOURA"],
];

export const FormItinerantRegister = () => {
  const {
    Controller,
    control,
    handleSubmit,
    register,
    data,
    setData,
    cidadesOptions,
    handleCep,
    ufOptions,
    active,
    setActive,
  } = useFormItinerantRegister();

  return (
    <S.Form>
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
          label="Endereço ( Rua)"
        />
      </div>
      <div>
        <Input {...register("endereco.numero")} required label="Número" />
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
              option={ufOptions}
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
              option={cidadesOptions}
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
              option={cidadesOptions}
              value={cidadesOptions.find((i) => i.value === value) || null}
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
              selected={data}
              placeholderText="___/___/___"
              label="Data de Realização"
              minDate={new Date()}
              onChange={(e) => {
                setData(e);
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
      </div>

      <div>
        <Input
          {...register("horarioFinal")}
          required
          label="Horário Final"
          placeholder="HH:MM"
        />
      </div>

      <div>
        <Input
          {...register("tempoMedio")}
          required
          label="Tempo Médio"
          placeholder="HH:MM"
        />
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
        <Input disabled={!active} label="Horário Inicial" placeholder="HH:MM" />
      </div>

      <div>
        <Input disabled={!active} label="Horário Final" placeholder="HH:MM" />
      </div>

      <div>
        <h2>Vistoriadores</h2>
      </div>

      <div>
        <Controller
          control={control}
          name="uuidColaboradores"
          render={({ field: { onChange, value } }) => (
            <AsyncSimpleSelect
              variant="search"
              label="Vistoriador"
              onChange={(e) => {}}
            />
          )}
        />
      </div>

      <div>
        <Table.WrapperItems>
          {VALUES?.map((i) => (
            <Table.Item
              columns="1fr .2FR"
              values={i}
              lastElement={
                <img
                  src="/assets/svgs/icon-trash-red.svg"
                  alt="icone lixeira"
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
