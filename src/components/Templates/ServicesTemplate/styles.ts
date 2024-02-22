import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.secundary} 0;
    width: 100%;

    > p {
      margin-bottom: 48px;
    }
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 62px;

  > button {
    width: 154px;
  }
`;
