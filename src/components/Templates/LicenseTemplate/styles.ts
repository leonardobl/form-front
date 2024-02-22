import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;

    > h1 {
      text-align: center;
    }

    > p {
      margin-bottom: ${pxToRem(48)};
    }
  `}
`;

export const form = styled.form`
  width: 100%;
  max-width: ${pxToRem(620)};
  margin: 0 auto;

  > :nth-child(1) {
    margin-bottom: ${pxToRem(48)};
  }

  button {
    margin: 0 auto;
  }
`;
