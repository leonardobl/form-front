import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    .title {
      text-align: center;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;
