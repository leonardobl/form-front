import styled, { css } from "styled-components";

export const MyTitle = styled.h1`
  ${({ theme: { colors } }) => css`
    font-family: Mulish;
    font-size: 32px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom: 48px;
    color: ${colors.primary};

    @media (max-width: 500px) {
      text-align: center;
      font-family: Mulish;
      font-size: 20px;
      font-style: normal;
      font-weight: 900;
      line-height: 24px;
      letter-spacing: 0.6px;
      margin-bottom: 2.5rem;
    }
  `}
`;
