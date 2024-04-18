import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Filter = styled.form`
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #12d1a7;
`;

export const FilterTitle = styled.h2`
  background: #12d1a7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px 0;
  color: #fff;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  text-transform: uppercase;
  text-align: center;
`;

export const FilterContent = styled.div`
  padding: 40px 90px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "nome nome nome nome" "cnpj cidade limpar buscar";
  gap: 32px 16px;

  > :nth-child(1) {
    grid-area: nome;
  }
  > :nth-child(2) {
    grid-area: cnpj;
  }
  > :nth-child(3) {
    grid-area: cidade;
  }
  > :nth-child(4) {
    grid-area: limpar;
  }
  > :nth-child(5) {
    grid-area: buscar;
  }
`;
