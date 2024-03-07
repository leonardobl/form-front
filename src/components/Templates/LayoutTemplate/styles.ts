import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const WrapperMain = styled.div`
  flex: 1;
`;

export const WrapperMainMenu = styled.nav``;

export const Main = styled.main`
  flex: 1;
`;

export const MainMenu = styled.div`
  background: #e1f2ee;
  height: 100%;
  box-shadow: 8px 4px 20.7px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  &[data-open="true"] {
    -webkit-transition: width 0.3s ease-in-out;
    -moz-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;

    width: ${pxToRem(285)};
  }

  &[data-open="false"] {
    -webkit-transition: width 0.3s ease-in-out;
    -moz-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;

    width: ${pxToRem(0)};
  }

  @media (max-width: 500px) {
    &[data-open="true"] {
      width: 100vw;
      position: fixed;
      z-index: 10;
    }
  }
`;

export const WrapperIconCloseMainMenu = styled.div`
  border-bottom: 1px solid #677a7666;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 20px;

  @media (max-width: 500px) {
    padding: 0 40px;
  }
`;

export const IconCloseMainMenu = styled.img`
  display: block;
  cursor: pointer;
`;

export const IconMenuHamburguer = styled.img`
  display: block;
  cursor: pointer;
  margin-right: 50px;

  @media (max-width: 500px) {
    margin-right: 20px;
  }
`;

export const IconLogo = styled.img`
  display: block;
  margin-right: auto;
  max-height: 56px;
  max-width: 120px;

  @media (max-width: 500px) {
    max-width: 100px;
  }
`;

export const IconMap = styled.img`
  display: block;
  margin-left: auto;
`;

export const IconHome = styled.img`
  cursor: pointer;
  width: 24px;
`;

export const WrapperIconsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  min-height: calc(100dvh - 90px);
  display: flex;
  flex-direction: column;
`;

export const WrapperButton = styled.div`
  padding: 16px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  > div {
    padding-top: 32px;
  }

  > div + div {
    border-top: 1px solid #677a7666;
  }

  button {
    color: #20332f;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.48px;
    white-space: nowrap;

    background-color: transparent;

    &:hover {
      color: #12d1a7;
    }
  }
`;

export const ModalContent = styled.div`
  /* padding: 102px 132px; */
  background: #6fa599;
  width: 300px;
  height: 220px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    color: #fff;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    max-width: 270px;
    margin-bottom: 32px;
  }

  button {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 500px) {
    padding: 32px 48px;

    p {
      font-size: 16px;
      line-height: 22px;
      max-width: 200px;
      margin: 0 auto 24px;
    }
  }
`;
