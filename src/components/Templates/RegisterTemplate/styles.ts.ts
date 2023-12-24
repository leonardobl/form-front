import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 180px 0;
`;

export const Content = styled.div`
  width: 750px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 106px;

  border-radius: 5px;
  background: #00186d;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.08px;
  }
`;

export const Form = styled.form`
  border-radius: 5px;
  background: #266bf0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Grid = styled.div<{ $gridTemplate: string; $gap?: string }>`
  ${({ $gap, $gridTemplate }) => css`
    display: grid;
    grid-template-columns: ${$gridTemplate};
    gap: ${$gap};
    margin-bottom: 24px;

    label {
      color: #eee;
      padding-bottom: 12px;
      text-align: center;
      font-family: "Poppins";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.6px;

      span {
        color: #ed0000;
      }
    }
  `}
`;

export const WrapperContentForm = styled.div`
  padding: 70px 100px;
`;

export const WrapperButton = styled.div`
  margin-top: 80px;
  text-align: center;
`;