import * as S from "./styles";
import { Container } from "../../Atoms/Container";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { MyModal } from "../../Atoms/MyModal";
import { useItinerantReschedule } from "./useItinerantReschedule";
import dayjs from "dayjs";

export const ItinerantRescheduleTemplate = () => {
  const { isOpen, setIsOpen, date, handleModal, handleSubmit, setDate } =
    useItinerantReschedule();

  return (
    <Container>
      <S.Wrapper>
        <Text>
          Selecione a data <span className="textStrong">disponível.</span>
        </Text>

        <S.Form onSubmit={handleModal}>
          <div>
            <InputDate
              showIcon
              label="Data"
              required
              minDate={new Date()}
              selected={date}
              placeholderText="___/___/___"
              onChange={setDate}
            />
          </div>

          <div>
            <Button>Avançar</Button>
          </div>
        </S.Form>

        <MyModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          <S.ContentModal>
            <S.WrapperCloseModal>
              <span onClick={() => setIsOpen(false)}>X</span>
            </S.WrapperCloseModal>

            <S.WrapperText>
              <Text>
                <span className="textStrong">Confirma</span> sua vistoria para o{" "}
                <span className="textStrong">
                  dia {dayjs(date).format("DD/MM/YYYY")}?
                </span>
              </Text>
            </S.WrapperText>
            <S.WrapperButtons>
              <Button data-variant-text onClick={() => setIsOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={() => handleSubmit()}>Confirmar</Button>
            </S.WrapperButtons>
          </S.ContentModal>
        </MyModal>
      </S.Wrapper>
    </Container>
  );
};
