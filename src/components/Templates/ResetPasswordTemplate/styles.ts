import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 23.5rem;
  margin: 0 auto;
`;

export const Text = styled.p`
  margin-bottom: 3.56rem;
  color: #20332f;
  text-align: center;
  font-family: Mulish;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.56rem 0;

  button {
    margin: 0 auto;
  }
`;
