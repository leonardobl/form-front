import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding-top: ${padding.secundary};
    padding-bottom: ${padding.secundary};
    width: 100%;

    .text {
      max-width: ${pxToRem(620)};
      margin-bottom: ${pxToRem(48)};
    }
  `}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 ${pxToRem(62)};
`;
