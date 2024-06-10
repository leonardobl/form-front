import React from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useAcceptInspection } from "./useAcceptInspection";
import { maskCep, maskPhone } from "../../../utils/masks";

export const AcceptInspectionTemplate = () => {
  const { atribuirAgendamento, vistoria } = useAcceptInspection();

  return (
    <S.Container>
      <S.Form>
        <div>
          <Input readOnly label="Nome" value={vistoria?.cliente?.nome} />
        </div>
        <div>
          <Input
            readOnly
            label="Telefone"
            value={maskPhone(vistoria?.cliente?.telefone)}
          />
        </div>
        <div>
          <Input
            readOnly
            label="CEP"
            value={maskCep(vistoria?.cliente?.endereco?.cep)}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Endereço (Rua)"
            value={vistoria?.cliente?.endereco?.logradouro}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Número"
            value={vistoria?.cliente?.endereco?.numero}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Complemento"
            value={vistoria?.cliente?.endereco?.complemento}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Bairro"
            value={vistoria?.cliente?.endereco?.bairro}
          />
        </div>
        <div>
          <Input readOnly label="UF" value={vistoria?.cliente?.endereco?.uf} />
        </div>
        <div>
          <Input
            readOnly
            label="Cidade"
            value={vistoria?.cliente?.endereco?.cidade}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Modelo do Carro"
            value={vistoria?.veiculo?.modelo}
          />
        </div>
        <div>
          <Input
            readOnly
            label="Tipo de Veículo"
            value={vistoria?.veiculo?.tipo}
          />
        </div>
        <div>
          <Input readOnly label="Ano" value={vistoria?.veiculo?.ano} />
        </div>
        <div>
          <Input readOnly label="Placa" value={vistoria?.veiculo?.placa} />
        </div>
        <div>
          <Input readOnly label="Renavam" value={vistoria?.veiculo?.renavam} />
        </div>
        <div>
          <Input readOnly label="Chassi" value={vistoria?.veiculo?.chassi} />
        </div>
        <div>
          <Button onClick={atribuirAgendamento}>Aceite</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
