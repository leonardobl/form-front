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
      margin: 48px 0;
    }

    .paymentSwitch {
      margin: 0 auto 48px;
    }

    .finalButton {
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const FormSearch = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 2rem 0;
    align-items: stretch;

    > :nth-child(2) {
      button {
        margin: 0 auto;
      }
    }
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
  padding: 0 40px;

  img {
    cursor: pointer;

    &[data-color-starcheck="true"] {
      filter: brightness(0) saturate(100%) invert(37%) sepia(35%)
        saturate(7494%) hue-rotate(212deg) brightness(96%) contrast(97%);
    }

    &[data-color-log="true"] {
      filter: brightness(0) saturate(100%) invert(90%) sepia(10%)
        saturate(7500%) hue-rotate(62deg) brightness(103%) contrast(63%);
    }

    &[data-color-vlx="true"] {
      filter: brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(2391%)
        hue-rotate(330deg) brightness(86%) contrast(91%);
    }

    &[data-color-tokyo="true"] {
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%)
        saturate(4426%) hue-rotate(345deg) brightness(92%) contrast(93%);
    }
  }
`;

export const FormModal = styled.form`
  width: 100%;
  max-width: ${pxToRem(1033)};
  overflow: auto;
  height: 80dvh;
  /* background: #e1f2ee; */
`;

export const GridModal = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 16px;
  padding: 90px;
  grid-template-areas: "nome nome" "cpf email" "telefone tipo" "cep rua" "numero bairro" "complemento complemento" "uf cidade" "button button";

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
    grid-area: numero;
  }

  > :nth-child(9) {
    grid-area: bairro;
  }

  > :nth-child(10) {
    grid-area: complemento;
  }

  > :nth-child(11) {
    grid-area: uf;
  }

  > :nth-child(12) {
    grid-area: cidade;
  }

  > :nth-child(13) {
    grid-area: button;

    display: flex;
    justify-content: center;
    gap: 0 48px;
  }

  @media (max-width: 500px) {
    width: 22.5rem;
    gap: 2.31rem 1rem;
    padding: 2rem 1rem;
    grid-template-areas: "nome nome" "cpf cpf" "email email" "telefone telefone" "tipo tipo" "cep numero" "rua rua" "bairro complemento" "uf cidade" "button button";
  }
`;

export const FormUser = styled.div`
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 32px 16px;
  }
`;

export const FormAtendence = styled.div`
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 32px 16px;
  }
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

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 32px 16px;
    align-items: stretch;

    > :nth-child(2) {
      button {
        margin: 0 auto;
      }
    }
  }
`;

export const GridSurvey = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 1fr;
  gap: 48px 16px;
  align-items: center;

  grid-template-areas: "placa renavam button";

  > :nth-child(1) {
    grid-area: placa;
  }
  > :nth-child(2) {
    grid-area: renavam;
  }
  > :nth-child(3) {
    grid-area: button;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 32px 16px;
    align-items: stretch;

    > :nth-child(3) {
      button {
        margin: 0 auto;
      }
    }
  }
`;

export const FormVeihecle = styled.div`
  width: 100%;
  margin-bottom: 48px;
`;

export const GridVeihecle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 16px;
  align-items: center;

  grid-template-areas: "modelo modelo ano placa" "renavam tipo chassi chassi";

  > :nth-child(1) {
    grid-area: modelo;
  }
  > :nth-child(2) {
    grid-area: ano;
  }

  > :nth-child(3) {
    grid-area: placa;
  }

  > :nth-child(4) {
    grid-area: renavam;
  }

  > :nth-child(5) {
    grid-area: tipo;
  }

  > :nth-child(6) {
    grid-area: chassi;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 32px 16px;
    align-items: stretch;
  }
`;

export const WrapperAddress = styled.div`
  margin: 48px 0 0;

  > h1 {
    text-align: center;
  }
`;

export const GridAddress = styled.div`
  display: grid;
  gap: 48px 16px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "nome nome nome nome" "telefone cep rua rua" "numero complemento complemento complemento" "bairro bairro uf cidade";

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: telefone;
  }

  > :nth-child(3) {
    grid-area: cep;
  }

  > :nth-child(4) {
    grid-area: rua;
  }

  > :nth-child(5) {
    grid-area: numero;
  }

  > :nth-child(6) {
    grid-area: complemento;
  }

  > :nth-child(7) {
    grid-area: bairro;
  }

  > :nth-child(8) {
    grid-area: uf;
  }

  > :nth-child(9) {
    grid-area: cidade;
  }

  @media (max-width: 500px) {
    gap: 32px 16px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "nome nome" "telefone cep" "rua rua" "numero complemento" "bairro bairro" "uf cidade";
  }
`;

export const ModalContent = styled.div`
  /* padding: 102px 132px; */
  /* background: #6fa599; */
  max-width: 506px;
  max-height: 328px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 64px;

  p {
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    max-width: 270px;
    margin-bottom: 32px;
  }

  .wrapperButtons {
    display: flex;
    justify-content: center;
    gap: 0 48px;
  }

  @media (max-width: 500px) {
    padding: 32px;

    p {
      font-size: 18px;
      line-height: 24px;
      max-width: 200px;
      margin: 0 auto 24px;
    }

    .wrapperButtons {
      gap: 0 32px;
    }
  }
`;

export const MainForm = styled.form`
  > h1 {
    text-align: center;
  }
`;
