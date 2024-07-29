import { Container } from "../../Atoms/Container";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Table } from "../../Molecules/Table";

const VALUES = [
  ["ESTÁCIO NETO"],
  ["KLEBER ALMENDRA"],
  ["JUNIOR OLIVEIRA MOURA"],
];

export const ItinerantDetailTemplate = () => {
  return (
    <Container>
      <S.Wrapper>
        <h1>Dados do Itinerante</h1>

        <S.Form>
          <div>
            <h2>Endereço de Realização</h2>
          </div>

          <div>
            <Input disabled label="CEP" />
          </div>
          <div>
            <Input disabled label="Endereço (Rua)" />
          </div>
          <div>
            <Input disabled label="Número" />
          </div>
          <div>
            <Input disabled label="Complemento" />
          </div>
          <div>
            <Input disabled label="Bairro" />
          </div>

          <div>
            <Input disabled label="UF" />
          </div>

          <div>
            <Input disabled label="Cidade" />
          </div>

          <div>
            <h2>Unidade Responsável</h2>
          </div>

          <div>
            <Input disabled label="Unidade" />
          </div>

          <div>
            <h2>Dados para Agendamento</h2>
          </div>

          <div>
            <Input disabled label="Data de Realização" />
          </div>

          <div>
            <Input disabled label="Horário Inicial" />
          </div>

          <div>
            <Input disabled label="Horário Final" />
          </div>

          <div>
            <Input disabled label="Tempo Médio" />
          </div>

          <div>
            <Input disabled label="Quantidade de Vagas por Horário" />
          </div>

          <div>
            <h2>Horário de Almoço</h2>
          </div>

          <div>
            <Input disabled label="Horário Inicial" />
          </div>

          <div>
            <Input disabled label="Horário Final" />
          </div>

          <div>
            <h2>Vistoriadores</h2>
          </div>

          <div>
            <Table.WrapperItems>
              {VALUES?.map((i) => (
                <Table.Item key={Math.random()} columns="1fr" values={i} />
              ))}
            </Table.WrapperItems>
          </div>

          <div>
            <Button>Voltar</Button>
          </div>
        </S.Form>
      </S.Wrapper>
    </Container>
  );
};
