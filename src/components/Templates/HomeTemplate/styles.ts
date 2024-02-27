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

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
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
  gap: 32px ${pxToRem(62)};

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
