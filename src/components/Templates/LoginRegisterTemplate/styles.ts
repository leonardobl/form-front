import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.secundary} 0;
    width: 100%;

    .text {
      margin-bottom: 48px;
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px ${pxToRem(62)};

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
