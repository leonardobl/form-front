import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
  }

  > p {
    margin-bottom: 47px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile};
  }
`;

export const WrapperPayment = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const FormPix = styled.form`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px 0;
  align-items: center;

  > div {
    align-self: stretch;
  }

  @media (max-width: 500px) {
    gap: 36px 0;
  }
`;

export const FormTicket = styled.form`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
`;
