import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;
    }
  `}
`;

export const Wrapper = styled.div`
  width: 759px;
  min-height: 485px;
  border-radius: 10px;
  background: #e1f2ee;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #20332f;
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 220px;
  }

  p.primary {
    color: #3f504c;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  p.second {
    color: #677a76;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 48px;
  }

  > button {
    width: 150px;
  }

  @media (max-width: 500px) {
    width: 100%;
    min-height: fit-content;
    padding: 2rem 0.5rem;

    h1 {
      color: #20332f;
      font-size: 6rem;
      font-weight: 700;
      line-height: 6.25rem;
      margin-bottom: 1rem;
    }

    p.primary {
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p.second {
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
      margin-bottom: 2rem;
    }
  }
`;
