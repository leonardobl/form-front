import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary};
  `}
`;

export const WrapperSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "input input input button";
  align-items: center;
  gap: 0 16px;
  margin: 0 auto;

  > :nth-child(1) {
    grid-area: input;
  }

  > :nth-child(2) {
    grid-area: button;
  }
`;
