import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 0;

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 983px;
  margin: 0 auto 48px;

  > img {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 983px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 48px 16px;
  grid-template-areas: "tipo tipo tipo tipo" "cliente cliente cliente cpf" "telefone email email email" "modelo modelo placa renavam" "chassi chassi chassi chassi" "valor valor forma forma";

  > :nth-child(1) {
    grid-area: tipo;
  }

  > :nth-child(2) {
    grid-area: cliente;
  }

  > :nth-child(3) {
    grid-area: cpf;
  }

  > :nth-child(4) {
    grid-area: telefone;
  }

  > :nth-child(5) {
    grid-area: email;
  }

  > :nth-child(6) {
    grid-area: modelo;
  }

  > :nth-child(7) {
    grid-area: placa;
  }

  > :nth-child(8) {
    grid-area: renavam;
  }

  > :nth-child(9) {
    grid-area: chassi;
  }

  > :nth-child(10) {
    grid-area: valor;
  }

  > :nth-child(11) {
    grid-area: forma;
  }
`;
