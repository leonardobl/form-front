import styled from "styled-components";

export const Container = styled.div`
  padding: 180px 0;
`;

export const Form = styled.form`
  width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #266bf0;
  font-family: "Poppins";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 24px;
  letter-spacing: 1.08px;
`;

export const Text = styled.p`
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 50px;
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const WrapperInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin-bottom: 50px;

  align-items: center;
`;

export const WrapperButton = styled.div`
  text-align: end;
`;
