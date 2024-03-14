import { darken } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    width: 100%;
    padding: ${padding.primary} 20px;

    > h1 {
      text-align: center;
    }
  `}
`;

export const FormFilter = styled.form`
  max-width: 49.1875rem;
  width: 100%;
  border-radius: 0.625rem;
  border: 1px solid #12d1a7;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const HeaderFormFilter = styled.div`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background: #6fa599;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Mulish;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  text-transform: uppercase;
`;

export const GridFormFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  grid-template-areas: "data cidade button1 button2";
  gap: 1rem;
  padding: 2rem;
  align-items: center;
  justify-content: center;

  > div {
    width: 100%;
  }

  > :nth-child(1) {
    grid-area: data;
  }

  > :nth-child(2) {
    grid-area: cidade;
  }
  > :nth-child(3) {
    grid-area: button1;

    button {
      color: rgba(32, 51, 47, 0.56);
      font-family: Mulish;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem; /* 125% */
      background-color: transparent;
      margin: 0 auto;
      display: block;
    }
  }
  > :nth-child(4) {
    grid-area: button2;
  }
`;

export const List = styled.div`
  width: 100%;
  max-width: 72.5625rem;
  margin: 0 auto;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem 2rem;

  > button {
    color: #20332f;
    text-align: center;
    font-family: Mulish;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.42rem;
  }
`;

export const ListBody = styled.div`
  > :nth-child(odd) {
    background-color: #e1f2ee;

    &:hover {
      background-color: ${darken(0.1, "#e1f2ee")};
    }
  }
  > :nth-child(even) {
    background-color: #f7f7f7;

    &:hover {
      background-color: ${darken(0.1, "#f7f7f7")};
    }
  }

  > div + div {
    margin-top: 2rem;
  }
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem 2rem;
  border-radius: 0.625rem;

  > p {
    color: #595959;
    font-family: Mulish;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 200% */
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
  }
`;

export const WrapperImgsButton = styled.div`
  display: flex;
  gap: 0 1rem;
  align-items: center;
  justify-content: center;
`;
