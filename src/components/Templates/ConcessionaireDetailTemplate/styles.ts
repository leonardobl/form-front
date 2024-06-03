import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.space.large};

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const Form = styled.form`
  max-width: 820px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 56px 16px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
    "title title title title title title"
    "nome nome nome nome nome nome"
    "cnpj cnpj cnpj email email email"
    "telefone telefone telefone cep cep cep"
    "rua rua rua rua rua rua"
    "numero numero numero complemento complemento complemento"
    "bairro bairro uf uf cidade cidade";

  > :nth-child(1) {
    grid-area: title;

    > p {
      text-align: start;
    }
  }

  > :nth-child(2) {
    grid-area: nome;
  }

  > :nth-child(3) {
    grid-area: cnpj;
  }

  > :nth-child(4) {
    grid-area: email;
  }

  > :nth-child(5) {
    grid-area: telefone;
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
    grid-area: complemento;
  }

  > :nth-child(10) {
    grid-area: bairro;
  }

  > :nth-child(11) {
    grid-area: uf;
  }

  > :nth-child(12) {
    grid-area: cidade;
  }
`;
