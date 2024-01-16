import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #266bf0;
  z-index: 10;
  min-height: 100dvh;
`;

export const Ul = styled.ul`
  li > a {
    color: #fff;
    font-family: "Roboto";
    font-weight: bold;
    padding: 25px 20px;
  }

  li {
    text-align: center;
    padding: 25px 0;
  }

  li + li {
    border-top: 1px solid #eee;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
