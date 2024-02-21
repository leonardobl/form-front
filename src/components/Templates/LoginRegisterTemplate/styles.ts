import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.secundary} 0;
    width: 100%;

    .text {
      margin-bottom: 48px;
    }
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 ${pxToRem(62)};
`;
