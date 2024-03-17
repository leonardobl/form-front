import { lighten } from "polished";
import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    width: 128px;
    height: 44px;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      180deg,
      ${colors.main} 0%,
      ${lighten(0.1, colors.main)} 100%
    );
    box-shadow: 0px 4px 4px 0px #00000033;

    font-family: Mulish;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;

    &:disabled {
      cursor: not-allowed;
      background: #b8b8b8;
    }
  `}
`;
