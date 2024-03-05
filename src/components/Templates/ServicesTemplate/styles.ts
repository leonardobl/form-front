import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.secundary} 0;
    width: 100%;

    > p {
      margin-bottom: ${pxToRem(48)};
    }

    @media (max-width: 500px) {
      padding: ${padding.mobile} 20px;
    }
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 ${pxToRem(62)};

  > a {
    width: ${pxToRem(154)};

    > button {
      width: 100%;
    }
  }

  > button {
    width: ${pxToRem(154)};
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 32px 0;
  }
`;
