import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputCheckSlide } from "../../Atoms/Inputs/InputCheckSlide";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { Button } from "../../Atoms/Button";
import { Table } from "../Table";

const VALUES = [
  ["ESTÁCIO NETO"],
  ["KLEBER ALMENDRA"],
  ["JUNIOR OLIVEIRA MOURA"],
];

export const FormItinerantRegister = () => {
  return (
    <S.Form>
      <div>
        <h2>Endereço de Realização</h2>
      </div>

      <div>
        <Input required label="CEP" />
      </div>
      <div>
        <Input required label="Endereço ( Rua)" />
      </div>
      <div>
        <Input required label="Número" />
      </div>
      <div>
        <Input label="Complemento" />
      </div>
      <div>
        <Input required label="Bairro" />
      </div>

      <div>
        <SimpleSelect required label="UF" />
      </div>

      <div>
        <SimpleSelect required label="Cidade" />
      </div>

      <div>
        <h2>Unidade Responsável</h2>
      </div>

      <div>
        <SimpleSelect required label="Unidade" />
      </div>

      <div>
        <h2>Dados para Agendamento</h2>
      </div>

      <div>
        <InputDate
          required
          showIcon
          placeholderText="___/___/___"
          label="Data de Realização"
          onChange={() => ""}
        />
      </div>

      <div>
        <Input required label="Horário Inicial" />
      </div>

      <div>
        <Input required label="Horário Final" />
      </div>

      <div>
        <InputCheckSlide label="Horário de Almoço" />
      </div>

      <div>
        <Input label="Horário Inicial" />
      </div>

      <div>
        <Input label="Horário Final" />
      </div>

      <div>
        <Input required label="Tempo Médio" />
      </div>

      <div>
        <Input required label="Quantidade de Vagas por Horário" />
      </div>

      <div>
        <h2>Vistoriadores</h2>
      </div>

      <div>
        <AsyncSimpleSelect variant="search" label="Vistoriador" />
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
