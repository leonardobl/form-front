import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const Wrapper = styled.div`
  max-width: ${pxToRem(984)};
  width: 100%;
  margin: 0 auto;
`;

export const WrapperText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 58px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 56px 16px;
  grid-template-areas: "status status status data horario" "nome nome nome cpf cpf" "telefone telefone email email email" "modelo modelo modelo placa renavam" "chassi chassi chassi chassi chassi" "servico servico servico valor valor" "local local local local local";

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
    grid-area: nome;
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

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
    grid-template-areas: "status status" "data horario" "nome nome" "cpf cpf" "telefone telefone" "email email" "modelo modelo" "placa renavam" "chassi chassi" "servico servico" "valor valor" "local local";
  }
`;
