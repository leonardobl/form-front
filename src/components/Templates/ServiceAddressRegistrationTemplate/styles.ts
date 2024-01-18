import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  width: 750px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Header = styled.header`
  height: 106px;

  border-radius: 5px;
  background: #00186d;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.08px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.6px;
    }
  }
`;

export const Form = styled.form`
  border-radius: 5px;
  background: #266bf0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Grid = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
    grid-template-areas:
      "nome nome nome nome nome telefone telefone telefone"
      "cep cep cep cep numero numero numero numero"
      "rua rua rua rua rua rua rua rua"
      "bairro bairro bairro bairro complemento complemento complemento complemento"
      "uf uf uf uf cidade cidade cidade cidade";

    > div label {
      color: #eee;
      text-align: center;
      font-family: "Poppins";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0.6px;
      display: block;
      margin-bottom: 16px;

      span {
        color: #ed0000;
      }
    }

    div:nth-child(1) {
      grid-area: nome;
    }

    div:nth-child(2) {
      grid-area: telefone;
    }

    :nth-child(3) {
      grid-area: cep;
    }

    :nth-child(4) {
      grid-area: numero;
    }

    :nth-child(5) {
      grid-area: rua;
    }

    :nth-child(6) {
      grid-area: bairro;
    }

    :nth-child(7) {
      grid-area: complemento;
    }

    :nth-child(8) {
      grid-area: uf;
    }

    :nth-child(9) {
      grid-area: cidade;
    }

    @media (max-width: 500px) {
      gap: 12px;
      grid-template-areas:
        "nome nome nome nome nome nome nome nome"
        "telefone telefone telefone telefone telefone telefone telefone telefone"
        "cep cep cep cep numero numero numero numero"
        "rua rua rua rua rua rua rua rua"
        "bairro bairro bairro bairro complemento complemento complemento complemento"
        "uf uf uf uf cidade cidade cidade cidade";

      div label {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.48px;
        width: 100%;
        margin-bottom: 12px;
      }
    }
  `}
`;

export const WrapperContentForm = styled.div`
  padding: 70px 100px;

  @media (max-width: 500px) {
    padding: 25px 20px;
  }
`;

export const WrapperButton = styled.div`
  margin-top: 80px;

  button {
    padding: 20px 40px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;
