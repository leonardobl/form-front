import styled, { css } from "styled-components";

export const MyText = styled.p`
  ${({ theme: { colors } }) => css`
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    color: ${colors.main};

    .textStrong {
      font-weight: 700;
      line-height: 32px;
    }

    .textGreen {
      color: ${colors.primary};
    }

    @media (max-width: 500px) {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;

      .textStrong {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
      }
    }
  `}
`;
