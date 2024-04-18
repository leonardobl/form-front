import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";

export const DeliveryAgentTemplate = () => {
  return (
    <S.Container>
      <Title>Delivery</Title>
      <S.Form>
        <div>
          <SimpleSelect />
        </div>
        <div>
          <SimpleSelect />
        </div>

        <div>
          <Button>Avançar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
