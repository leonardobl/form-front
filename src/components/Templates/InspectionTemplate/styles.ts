import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;
  margin: 0 auto;
  max-width: ${(props) => props.theme.space.large};
  width: 100%;

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 990px;
  margin: 0 auto 48px;

  display: grid;
  grid-template-columns: repeat(6, minmax(160px, 1fr));
  grid-template-areas: "title title title title title title" "tipo tipo data data hora hora" "cliente cliente cliente cliente cpf cpf" "email email email email telefone telefone" "modelo modelo placa placa renavam renavam" "chassi chassi valor valor pagamento pagamento";
  gap: 48px 16px;

  > :nth-child(1) {
    grid-area: title;
  }

  > :nth-child(2) {
    grid-area: tipo;
  }

  > :nth-child(3) {
    grid-area: data;
  }

  > :nth-child(4) {
    grid-area: hora;
  }

  > :nth-child(5) {
    grid-area: cliente;
  }

  > :nth-child(6) {
    grid-area: cpf;
  }

  > :nth-child(7) {
    grid-area: telefone;
  }

  > :nth-child(8) {
    grid-area: email;
  }

  > :nth-child(9) {
    grid-area: modelo;
  }

  > :nth-child(10) {
    grid-area: placa;
  }
  > :nth-child(11) {
    grid-area: renavam;
  }

  > :nth-child(12) {
    grid-area: chassi;
  }

  > :nth-child(13) {
    grid-area: valor;
  }

  > :nth-child(14) {
    grid-area: pagamento;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 24px 0;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  padding: 8px 16px;
  border-radius: 10px;
  background: #e8e8e8;
  width: 100%;
  max-width: 880px;
  margin: 0 auto;

  > P {
    text-align: center;
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const ButtonDown = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 6px;
  border-radius: 10px;
  border: 1px solid #2d2d2d;
  background: #fff;
  padding: 10px 20px;

  color: #2d2d2d;
  text-align: center;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
