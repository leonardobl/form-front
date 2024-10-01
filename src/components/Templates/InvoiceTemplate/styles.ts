import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: 2rem 0;
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
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem 16px;
  grid-template-areas: "status status status data horario" "nome nome nome cpf cpf" "modelo modelo modelo placa renavam" "chassi chassi chassi chassi chassi";

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

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
    grid-template-areas: "status status" "data horario" "nome nome" "cpf cpf" "modelo modelo" "placa renavam" "chassi chassi";
  }
`;

export const Info = styled.div`
  height: ${pxToRem(59)};
  background-color: #e8e8e8;
  width: 100%;
  max-width: ${pxToRem(708)};
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${pxToRem(72)};

  > p {
    font-family: Mulish;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: #3f504c;

    > span {
      color: red;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 2rem;

    > p {
      font-size: 1rem;
      font-style: normal;
      line-height: 1.25rem;
    }
  }
`;

export const ImgQr = styled.img`
  width: 260px;
  border-radius: 10px;
  border: 2px solid var(--MAPA1, #12d1a7);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

export const GridWrapper = styled.div`
  max-width: ${pxToRem(740)};
  width: 100%;
  display: grid;
  margin: 0 auto;
  gap: ${pxToRem(40)};
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "qr valor valor" "qr input input" "qr button1 button1";

  button {
    width: 168px;
    height: 68px;

    white-space: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  > :nth-child(1) {
    grid-area: qr;
  }

  > :nth-child(2) {
    grid-area: valor;

    p {
      font-family: Mulish;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  > :nth-child(3) {
    grid-area: input;
    width: 100%;
  }

  > :nth-child(4) {
    grid-area: button1;
    /* margin-left: auto; */
  }

  > :nth-child(5) {
    grid-area: button2;
    margin-right: auto;
  }

  @media (max-width: 500px) {
    gap: ${pxToRem(32)};
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-areas: "qr" "valor" "input" "button1" "button2";

    > :nth-child(4) {
      margin: 0 auto;
    }

    > :nth-child(2) {
      p {
        text-align: center;
        font-family: Mulish;
        font-size: 1rem;
        font-style: normal;
        font-weight: 800;
        line-height: 1.25rem;
      }
    }

    > :nth-child(5) {
      margin: 0 auto;
    }
  }
`;