import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 20px;
  }
`;

export const ButtonFilter = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  gap: 0 8px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 24px;

  > span {
    color: #2d2d2d;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const FormFilter = styled.form`
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.main};
  background: var(--W, #fff);
  width: 100%;
  max-width: 780px;
  margin: 0 auto 48px;

  @media (max-width: 500px) {
    border: none;
    margin: 0 auto 32px;
  }
`;

export const FormFilterGrid = styled.div`
  padding: 32px 16px;
  display: flex;
  justify-content: center;
  gap: 0 32px;
  align-items: center;

  div#wrapperDate {
    max-width: 180px;
  }

  button#btntext {
    color: var(--PADRAO-2, #9d9d9d);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    background-color: transparent;
  }

  @media (max-width: 500px) {
    gap: 32px 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "data data" "limpar buscar";

    > :nth-child(1) {
      grid-area: data;
      margin: 0 auto;
    }
    > :nth-child(2) {
      grid-area: limpar;
    }
    > :nth-child(3) {
      grid-area: buscar;
    }
  }
`;

export const FormFilterHeader = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  h2 {
    color: var(--W, #fff);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Table = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TableHeader = styled.div`
  padding: 16px;
  display: grid;

  grid-template-columns: 2fr 1fr 0.6fr 1fr 1fr 1fr 0.1fr;

  > h2 {
    color: var(--PADO-1, #2d2d2d);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
  }
`;

export const TableItens = styled.div`
  > :nth-child(odd) {
    background-color: #e8e8e8;
  }

  > :nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const TableItem = styled.div`
  padding: 16px;
  display: grid;
  border-radius: 10px;
  align-items: center;
  grid-template-columns: 2fr 1fr 0.6fr 1fr 1fr 1fr 0.1fr;

  > img {
    cursor: pointer;
  }

  > p {
    color: #595959;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
    letter-spacing: 0.36px;
    text-transform: uppercase;
  }

  & + div {
    margin-top: 16px;
  }
`;
