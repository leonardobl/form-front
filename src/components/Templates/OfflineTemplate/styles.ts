import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { padding } }) => css``}
`;

export const Main = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;

    @media (max-width: 500px) {
      padding: ${padding.mobile} 0;

      height: 80vh;

      > p {
        margin-bottom: 30px;
      }
    }
  `}
`;

export const WrapperImgs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LogoImg = styled.img`
  width: 5.99675rem;
  height: 3.62506rem;
`;

export const IconHome = styled.img`
  width: 1.92944rem;
  height: 1.83538rem;
`;

export const IconDanger = styled.img`
  width: 4rem;
  height: 3.21506rem;
  display: block;
  margin: 0 auto 3.86rem;

  @media (max-width: 500px) {
    margin: 0 auto 1rem;
  }
`;

export const LogoMapa = styled.img`
  display: block;
  margin: 0 16px 16px auto;
`;

export const Title = styled.p`
  color: #20332f;
  font-family: Mulish;
  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
  line-height: 3.375rem;
  letter-spacing: 0.09rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 20px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0.6px;
  }
`;

export const Text = styled.p`
  color: #2d2d2d;
  text-align: center;
  font-family: Mulish;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 500px) {
    color: var(--MAPA6, #20332f);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    max-width: 280px;
    text-align: center;
    margin: 0 auto 1rem;
  }
`;

export const Contact = styled.p`
  color: #12d1a7;
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.06rem;
  margin-bottom: 2.6rem;

  @media (max-width: 500px) {
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0.6px;
  }
`;

export const PhoneNumer = styled.p`
  color: #3f504c;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: 14px 32px;
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  border-radius: 10px;
  background: #e1f2ee;

  @media (max-width: 500px) {
    color: #3f504c;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  }
`;
