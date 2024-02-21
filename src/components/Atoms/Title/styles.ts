import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-family: Mulish;
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom: 48px;
    color: ${colors.primary};
  `}
`;
