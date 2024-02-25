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

export const Main = styled.main``;

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
`;

export const WrapperIconCloseMainMenu = styled.div`
  border-bottom: 1px solid #677a7666;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 20px;
`;

export const IconCloseMainMenu = styled.img`
  display: block;
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 100%;
  background: #12d1a7;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.16);
  height: 90px;
  padding: 0 42px;
  display: flex;
  align-items: center;
`;

export const IconMenuHamburguer = styled.img`
  display: block;
  margin-right: 50px;
  cursor: pointer;
`;

export const IconLogo = styled.img``;

export const IconMap = styled.img`
  display: block;
  margin-left: auto;
`;

export const IconHome = styled.img`
  cursor: pointer;
`;

export const WrapperIconsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
`;
