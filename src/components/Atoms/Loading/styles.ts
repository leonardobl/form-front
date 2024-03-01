import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  min-height: 100dvh;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s linear;

  span {
    margin-top: 160px;
    text-align: center;
    color: #fff;
  }
`;

export const WrapperImgs = styled.div`
  position: absolute;
`;

export const ImgLogo = styled.img`
  position: absolute;
  width: 40px;
  left: -20px;
`;
export const ImgLoad = styled.img`
  position: absolute;
  width: 100px;

  top: -32px;
  left: -50px;
`;
