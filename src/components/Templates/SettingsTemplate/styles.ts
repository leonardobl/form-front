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
  width: 100%;
  max-width: 974px;
  margin: 0 auto 120px;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid ${(props) => props.theme.colors.main};
`;

export const FilterTitle = styled.h2`
  border-radius: 10px 10px 0px 0px;
  background: ${(props) => props.theme.colors.main};
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "nome nome nome nome nome nome" "cnpj cnpj cidade cidade limpar buscar";
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
    display: flex;
    align-items: center;

    > button {
      color: #9d9d9d;
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      background-color: transparent;
      display: block;
      margin: 0 auto;
    }
  }
  > :nth-child(5) {
    grid-area: buscar;
    display: flex;
    align-items: center;
  }
`;

export const List = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const ListTitles = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 0.8fr;
  padding: 20px 16px;

  > h2,
  > button {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.48px;
  }

  > button {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0 6px;
  }

  > :last-child {
    margin-left: auto;
  }
`;

export const WrapperListItens = styled.div`
  margin-bottom: 40px;

  > :nth-child(odd) {
    border-radius: 10px;
    background: #e8e8e8;
  }

  > :nth-child(even) {
    border-radius: 10px;
    background: #f7f7f7;
  }

  > div + div {
    margin-top: 16px;
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 2fr 0.8fr;
  padding: 20px 16px;
  align-items: center;

  > :last-child {
    margin-left: auto;
  }
`;

export const Icon = styled.img`
  cursor: pointer;

  &[data-color-starcheck="true"] {
    filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(585%)
      hue-rotate(180deg) brightness(98%) contrast(94%);
  }

  &[data-color-log="true"] {
    filter: brightness(0) saturate(100%) invert(79%) sepia(16%) saturate(968%)
      hue-rotate(76deg) brightness(96%) contrast(85%);
  }

  &[data-color-vlx="true"] {
    filter: brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(79%)
      hue-rotate(181deg) brightness(95%) contrast(81%);
  }

  &[data-color-tokyo="true"] {
    filter: brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(4716%)
      hue-rotate(328deg) brightness(103%) contrast(98%);
  }
`;
