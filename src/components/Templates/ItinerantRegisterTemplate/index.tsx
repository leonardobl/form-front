import { Container } from "../../Atoms/Container";

import { FormItinerantRegister } from "../../Molecules/FormItinerantRegister";
import * as S from "./styles";

export const ItinerantRegisterTemplate = () => {
  return (
    <Container>
      <S.Wrapper>
        <h1>Cadastro de Itinerantes</h1>

        <FormItinerantRegister />
      </S.Wrapper>
    </Container>
  );
};
