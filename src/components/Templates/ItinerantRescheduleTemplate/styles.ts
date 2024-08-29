import styled from "styled-components";

export const Wrapper = styled.div`
  > p {
    margin-bottom: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 338px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px 0;
  align-items: center;

  > div {
    min-width: 100%;
  }

  > div > button {
    margin: 0 auto;
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  max-width: 482px;
  padding: 20px;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);
`;

export const WrapperCloseModal = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 24px;

  span {
    color: #2d2d2d;
    cursor: pointer;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const WrapperText = styled.div`
  margin-bottom: 24px;

  p {
    color: #2d2d2d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;
