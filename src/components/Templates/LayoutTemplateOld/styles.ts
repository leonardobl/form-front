import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Wrapper = styled.div``;

export const IconLogo = styled.img`
  display: block;
  width: ${pxToRem(96)};
`;
export const IconHome = styled.img`
  display: block;
  width: ${pxToRem(30)};
  cursor: pointer;
`;
export const IconMenu = styled.img`
  display: block;
  width: ${pxToRem(26)};
`;

export const LogoMapa = styled.img`
  display: block;
  margin-left: auto;
`;

export const FlexWrapperIcons = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${space.large};
  `}
`;
