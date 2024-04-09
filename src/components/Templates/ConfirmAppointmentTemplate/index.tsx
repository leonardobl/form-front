import React from "react";
import * as S from "./styles";
import { Text } from "../../Atoms/Text";
import { Input } from "../../Atoms/Inputs/Input";

export const ConfirmAppointmentTemplate = () => {
  return (
    <S.Container>
      <S.WrapperText>
        <Text>
          Confirme os{" "}
          <span className="textStrong">dados do seu agendamento</span>.
        </Text>
        <img src="/assets/svgs/down-doc.svg" alt="icone download" />
      </S.WrapperText>
      <S.Form>
        <div>
          <Input readOnly label="Tipo de Agendamento" />
        </div>

        <div>
          <Input readOnly label="Cliente" />
        </div>

        <div>
          <Input readOnly label="CPF/CNPJ" />
        </div>

        <div>
          <Input readOnly label="Telefone" />
        </div>

        <div>
          <Input readOnly label="E-mail" />
        </div>

        <div>
          <Input readOnly label="Modelo do carro" />
        </div>

        <div>
          <Input readOnly label="Placa" />
        </div>

        <div>
          <Input readOnly label="Renavam" />
        </div>

        <div>
          <Input readOnly label="Chassi" />
        </div>

        <div>
          <Input readOnly label="Valor Pago" />
        </div>

        <div>
          <Input readOnly label="Forma de Pagamento" />
        </div>
      </S.Form>
    </S.Container>
  );
};
