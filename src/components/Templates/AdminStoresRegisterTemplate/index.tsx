import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { InputTime } from "../../Atoms/Inputs/InputTime";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";

export const AdminStoresRegisterTemplate = () => {
  return (
    <S.Container>
      <h1>Cadastro de Lojas</h1>

      <S.Form>
        <div>
          <h3>Informações Básicas</h3>
        </div>

        <div>
          <Input label="Nome" required />
        </div>

        <div>
          <Input label="CEP" />
        </div>

        <div>
          <Input label="Endereço ( Rua)" />
        </div>

        <div>
          <Input label="Número" />
        </div>

        <div>
          <Input label="Complemento" />
        </div>

        <div>
          <Input label="Bairro" />
        </div>

        <div>
          <SimpleSelect label="UF" required />
        </div>

        <div>
          <SimpleSelect label="Cidade" required />
        </div>

        <div>
          <h3>Informações Financeiras</h3>
        </div>

        <div>
          <Input label="Conta Iugu" required />
        </div>

        <div>
          <h3>Informações de Atendimento</h3>
        </div>

        <div>
          <InputTime label="Tempo Médio" placeholder="mm" />
        </div>

        <div>
          <InputTime label="Quantidade de vagas por Horário" placeholder="00" />
        </div>

        <div>
          <h4>Horário de Atendimento Semanal</h4>
        </div>

        <div>
          <InputTime label="Horário Inicial" placeholder="hh:mm" />
        </div>

        <div>
          <InputTime label="Horário Final" placeholder="hh:mm" />
        </div>

        <div>
          <h4>Intervalo de Almoço</h4>
        </div>

        <div>
          <InputTime label="Horário Inicial" placeholder="hh:mm" />
        </div>

        <div>
          <InputTime label="Horário Final" placeholder="hh:mm" />
        </div>

        <div>
          <h4>Horário de Atendimento - Sábado</h4>
        </div>

        <div>
          <InputTime label="Horário Inicial" placeholder="hh:mm" />
        </div>

        <div>
          <InputTime label="Horário Final" placeholder="hh:mm" />
        </div>

        <div>
          <Button>Salvar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
