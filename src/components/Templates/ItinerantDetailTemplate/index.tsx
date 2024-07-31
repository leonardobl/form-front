import { Container } from "../../Atoms/Container";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Inputs/Input";
import { Table } from "../../Molecules/Table";
import { useItinerantDetail } from "./useItinerantDetail";
import { maskCep } from "../../../utils/masks";
import dayjs from "dayjs";

export const ItinerantDetailTemplate = () => {
  const { itinerante } = useItinerantDetail();

  return (
    <Container>
      <S.Wrapper>
        <h1>Dados do Itinerante</h1>

        <S.Form>
          <div>
            <h2>Endereço de Realização</h2>
          </div>

          <div>
            <Input
              disabled
              label="CEP"
              value={maskCep(itinerante?.endereco?.cep)}
            />
          </div>
          <div>
            <Input
              disabled
              label="Endereço (Rua)"
              value={itinerante?.endereco?.logradouro}
            />
          </div>
          <div>
            <Input
              disabled
              label="Número"
              value={itinerante?.endereco?.numero}
            />
          </div>
          <div>
            <Input
              disabled
              label="Complemento"
              value={itinerante?.endereco?.complemento}
            />
          </div>
          <div>
            <Input
              disabled
              label="Bairro"
              value={itinerante?.endereco?.bairro}
            />
          </div>

          <div>
            <Input disabled label="UF" value={itinerante?.endereco?.uf} />
          </div>

          <div>
            <Input
              disabled
              label="Cidade"
              value={itinerante?.endereco?.cidade}
            />
          </div>

          <div>
            <h2>Unidade Responsável</h2>
          </div>

          <div>
            <Input
              disabled
              label="Unidade"
              value={itinerante?.delivery?.cidade}
            />
          </div>

          <div>
            <h2>Dados para Agendamento</h2>
          </div>

          <div>
            <Input
              disabled
              label="Data de Realização"
              value={dayjs(itinerante?.dataRealizacao).format("DD/MM/YYYY")}
            />
          </div>

          <div>
            <Input
              disabled
              label="Horário Inicial"
              value={itinerante?.horarioInicial}
            />
          </div>

          <div>
            <Input
              disabled
              label="Horário Final"
              value={itinerante?.horarioFinal}
            />
          </div>

          <div>
            <Input
              disabled
              label="Tempo Médio"
              value={itinerante?.tempoMedio}
            />
          </div>

          <div>
            <Input
              disabled
              label="Quantidade de Vagas por Horário"
              value={itinerante?.totalVagas}
            />
          </div>

          <div>
            <h2>Horário de Almoço</h2>
          </div>

          <div>
            <Input
              disabled
              label="Horário Inicial"
              value={itinerante?.horarioInicialAlmoco}
            />
          </div>

          <div>
            <Input
              disabled
              label="Horário Final"
              value={itinerante?.horarioFinalAlmoco}
            />
          </div>

          <div>
            <h2>Vistoriadores</h2>
          </div>

          <div>
            <Table.WrapperItems>
              {itinerante?.colaboradores.length > 0 &&
                itinerante?.colaboradores?.map((i) => (
                  <Table.Item
                    key={Math.random()}
                    columns="1fr"
                    values={[i?.nome]}
                  />
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
