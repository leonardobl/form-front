import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    .title {
      text-align: center;
    }
  `}
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: ${pxToRem(340)};
  width: 100%;

  > div + div {
    margin-top: 48px;
  }

  > button.button {
    margin: 48px auto 0;
  }
`;

export const ButtonForgot = styled.button`
  margin-top: 24px;
  display: block;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #20332f8f;
  margin-left: auto;
`;
