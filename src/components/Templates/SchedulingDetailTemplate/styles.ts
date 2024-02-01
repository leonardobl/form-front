import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: 100%;
    max-width: ${space.medio};
    margin: 0 auto;
  `}
`;

export const Title = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 36px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.08px;

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 64px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const Form = styled.form`
  background: #eee;
  padding: 40px 80px;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto 80px;

  @media (max-width: 500px) {
    padding: 20px 20px;
    margin-bottom: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  grid-template-areas:
    "status status status data horario"
    "cliente cliente cliente cpf cpf"
    "telefone telefone email email email"
    "modelo modelo modelo placa renavam"
    "chassi chassi chassi chassi chassi"
    "servico servico servico valor valor"
    "local local local local local"
    "laudo laudo laudo laudo laudo";

  > :nth-child(1) {
    grid-area: status;
  }

  > :nth-child(2) {
    grid-area: data;
  }

  > :nth-child(3) {
    grid-area: horario;
  }

  > :nth-child(4) {
    grid-area: cliente;
  }

  > :nth-child(5) {
    grid-area: cpf;
  }

  > :nth-child(6) {
    grid-area: telefone;
  }

  > :nth-child(7) {
    grid-area: email;
  }

  > :nth-child(8) {
    grid-area: modelo;
  }

  > :nth-child(9) {
    grid-area: placa;
  }

  > :nth-child(10) {
    grid-area: renavam;
  }

  > :nth-child(11) {
    grid-area: chassi;
  }

  > :nth-child(12) {
    grid-area: servico;
  }
  > :nth-child(13) {
    grid-area: valor;
  }
  > :nth-child(14) {
    grid-area: local;
  }
  > :nth-child(15) {
    grid-area: laudo;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "status status"
      "data horario"
      "cliente cliente"
      "cpf cpf"
      "telefone telefone"
      "email email"
      "modelo modelo"
      "renavam placa"
      "chassi chassi"
      "servico servico"
      "valor valor"
      "local local";
  }
`;

export const SubTitle = styled.h3`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.72px;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const WrapperBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 72px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 24px 0;
  }
`;

export const ModalContent = styled.div`
  padding: 102px 132px;
  background: #266bf0;

  p {
    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    max-width: 340px;
    margin-bottom: 40px;
  }

  button {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 500px) {
    padding: 32px 48px;

    p {
      font-size: 18px;
      line-height: 24px;
      max-width: 200px;
      margin: 0 auto 24px;
    }
  }
`;
