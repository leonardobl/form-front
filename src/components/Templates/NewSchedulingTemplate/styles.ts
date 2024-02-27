import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;
    max-width: ${pxToRem(850)};
    margin: 0 auto;

    > h1 {
      text-align: center;
    }

    .optionAtendance {
      margin: 0 auto 48px;
    }

    .textService {
      margin-bottom: 48px;
    }
  `}
`;

export const FormSearch = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "input input input button";
  align-items: center;
  gap: 0 16px;
  margin: 0 auto 80px;

  > :nth-child(1) {
    grid-area: input;
  }

  > :nth-child(2) {
    grid-area: button;
  }
`;

export const WrapperValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotFoundvalue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  img {
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
  width: 100%;
  max-width: ${pxToRem(1033)};
  overflow: auto;
  height: 80dvh;
  background: #e1f2ee;
`;

export const GridModal = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  padding: 90px;
  grid-template-areas: "nome nome" "cpf email" "telefone tipo" "cep rua" "complemento bairro" "uf cidade" "button button";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cpf;
  }

  > :nth-child(3) {
    grid-area: email;
  }

  > :nth-child(4) {
    grid-area: telefone;
  }

  > :nth-child(5) {
    grid-area: tipo;
  }

  > :nth-child(6) {
    grid-area: cep;
  }

  > :nth-child(7) {
    grid-area: rua;
  }

  > :nth-child(8) {
    grid-area: complemento;
  }

  > :nth-child(9) {
    grid-area: bairro;
  }

  > :nth-child(10) {
    grid-area: uf;
  }

  > :nth-child(11) {
    grid-area: cidade;
  }

  > :nth-child(12) {
    grid-area: button;

    button {
      margin: 0 auto;
    }
  }
`;

export const FormUser = styled.form`
  margin: 0 auto 48px;
  width: 100%;
`;

export const GridUser = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;

  grid-template-areas: "nome nome" "cpf telefone" "email tipo";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cpf;
  }
  > :nth-child(3) {
    grid-area: telefone;
  }
  > :nth-child(4) {
    grid-area: email;
  }
  > :nth-child(5) {
    grid-area: tipo;
  }
`;

export const FormAtendence = styled.form`
  width: 100%;
  margin-bottom: 48px;
`;

export const GridAtendece = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 40px;

  grid-template-areas: ". loja loja ." ". texto texto ." "data data horario horario";

  > :nth-child(1) {
    grid-area: loja;
  }

  > :nth-child(2) {
    grid-area: texto;
  }

  > :nth-child(3) {
    grid-area: data;
  }

  > :nth-child(4) {
    grid-area: horario;
  }

  > :nth-child(5) {
    grid-area: horario;
  }
`;

export const FormService = styled.form`
  width: 100%;
`;

export const GridLicense = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
  gap: 48px 16px;
  align-items: center;

  grid-template-areas: "chassi button";

  > :nth-child(1) {
    grid-area: chassi;
  }
  > :nth-child(2) {
    grid-area: button;
  }
`;

export const GridSurvey = styled.div``;
