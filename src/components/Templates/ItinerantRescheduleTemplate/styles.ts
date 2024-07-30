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
  max-width: 451px;
  padding: 20px;
`;

export const WrapperCloseModal = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 24px;

  > span {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    cursor: pointer;
  }
`;

export const WrapperText = styled.div`
  margin-bottom: 24px;

  > p {
    text-align: start;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
`;
