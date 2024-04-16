import styled from "styled-components";

export const Container = styled.form`
  padding: ${(props) => props.theme.padding.primary} 0;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  > p {
    margin-bottom: 48px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "data horario" "button button";
  gap: 48px;

  > :nth-child(1) {
    grid-area: data;
  }

  > :nth-child(2) {
    grid-area: horario;
  }

  > :nth-child(3) {
    grid-area: button;
    button {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas: "data" "horario" "button";
  }
`;

export const ModalContent = styled.div`
  /* padding: 102px 132px; */
  /* background: #6fa599; */
  width: 506px;
  height: 328px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    color: ${(props) => props.theme.colors.textColor};
    text-align: center;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    max-width: 270px;
    margin-bottom: 32px;
  }

  button {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 500px) {
    padding: 32px 48px;

    p {
      font-size: 18px;
      line-height: 24px;
      max-width: 200px;
      margin: 0 auto 24px;
    }
  }
`;
