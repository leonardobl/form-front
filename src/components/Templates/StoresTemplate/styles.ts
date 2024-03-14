import { darken } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 20px;
    width: 100%;

    > h1 {
      text-align: center;
    }
  `}
`;

export const List = styled.div`
  max-width: 72.5rem;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr 1.5fr 1fr 1fr 2fr 0.2fr;
  padding: 1rem 2rem;

  > h4 {
    color: #20332f;
    font-family: Mulish;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03rem;
  }
`;

export const BodyList = styled.div`
  > div:nth-child(even) {
    background-color: #f7f7f7;

    &:hover {
      background-color: ${darken(0.1, "#f7f7f7")};
    }
  }

  > div:nth-child(odd) {
    background-color: #e1f2ee;

    &:hover {
      background-color: ${darken(0.1, "#e1f2ee")};
    }
  }

  div + div {
    margin-top: 1rem;
  }
`;

export const RowList = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2fr 1.5fr 1fr 1fr 2fr 0.2fr;
  padding: 1rem 2rem;
  border-radius: 0.625rem;
  align-items: center;

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
