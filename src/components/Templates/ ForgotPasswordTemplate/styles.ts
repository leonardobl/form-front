import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 39.75rem;
  margin: 0 auto;

  > h1 {
    text-align: center;
  }

  > p {
    margin-bottom: 3rem;
  }

  > button {
    margin: 2.81rem auto 0;
  }

  @media (max-width: 500px) {
  }
`;
