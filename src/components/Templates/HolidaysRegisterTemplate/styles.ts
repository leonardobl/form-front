import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;

  h1 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    margin-bottom: 48px;
  }

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 16px;
  margin: 0 auto;

  > div {
    width: 100%;
    max-width: 340px;
  }

  div#wrapperButton {
    width: 100%;
    max-width: 700px;
  }

  button {
    margin: auto;
  }
`;
