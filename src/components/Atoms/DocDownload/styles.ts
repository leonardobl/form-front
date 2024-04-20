import styled from "styled-components";

export const Container = styled.div`
  width: 595px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const Bar = styled.div`
  background: ${(props) => props.theme.colors.main};
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
    height: 100%;
    max-height: 32px;
  }
`;

export const WrapperContent = styled.div`
  width: 543px;
  margin: 0 auto;

  > div + div {
    margin-top: 24px;
  }
`;

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.main};
`;

export const CardTitle = styled.h2`
  background: ${(props) => props.theme.colors.main};
  height: 26px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.48px;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  > p {
    color: #2d2d2d;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    span {
      color: rgba(32, 51, 47, 0.7);
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }
  }
`;
