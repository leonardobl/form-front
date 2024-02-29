import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Main = styled.div`
  ${({ theme: { padding } }) => css`
    padding: ${padding.primary} 0;
    width: 100%;
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
`;

export const PhoneNumer = styled.p`
  color: #3f504c;
  text-align: center;
  font-family: Mulish;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
`;
