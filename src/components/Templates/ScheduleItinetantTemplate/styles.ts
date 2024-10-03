import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;

  > h1 {
    color: #2d2d2d;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    margin-bottom: 32px;
  }

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 910px;
`;

export const WrapperButton = styled.div`
  margin-bottom: 16px;
`;

export const ButtonSelect = styled.button`
  all: unset;
  cursor: pointer;

  border-radius: 10px;
  background: #20332f;
  display: flex;
  width: 86px;
  height: 32px;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const ItemMobile = styled.div``;
