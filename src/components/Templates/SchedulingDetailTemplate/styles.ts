import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;
`;

export const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: ${space.medio};

    margin: 0 auto;
  `}
`;

export const TItle = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 36px;
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 1.08px;
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 64px;
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const Form = styled.form`
  background: #eee;
  padding: 40px 80px;
`;

export const Grid = styled.div<{
  $gridTemplate: string;
  $gap?: string;
}>`
  ${({ $gridTemplate, $gap }) => css`
    display: grid;
    grid-template-columns: ${$gridTemplate};
    gap: ${$gap || "0 30px"};
    margin-bottom: 40px;
  `}
`;

export const SubTitle = styled.h3`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.72px;
  margin-bottom: 16px;
`;

export const WrapperBorder = styled.div<{ $borderBottom?: boolean }>`
  ${({ $borderBottom }) => css`
    padding-top: 40px;
    border-bottom: ${$borderBottom ? "1px solid #cacaca" : "none"};
  `}
`;
