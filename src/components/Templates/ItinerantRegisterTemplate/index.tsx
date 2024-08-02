import { Container } from "../../Atoms/Container";
import { FormItinerantRegister } from "../../Molecules/FormItinerantRegister";
import * as S from "./styles";
import { useItinerantRegister } from "./useItinerantRegister";

export const ItinerantRegisterTemplate = () => {
  const { handleSubmit } = useItinerantRegister();

  return (
    <Container>
      <S.Wrapper>
        <h1>Cadastro de Itinerantes</h1>
        <FormItinerantRegister onSubmitForm={handleSubmit} />
      </S.Wrapper>
    </Container>
  );
};
