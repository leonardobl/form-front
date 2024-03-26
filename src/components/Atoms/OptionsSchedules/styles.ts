import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > img {
    cursor: pointer;
    padding: 5px;
    margin-bottom: -3px;

    &[data-disabled="true"] {
      pointer-events: none;
    }
  }
`;

export const Menu = styled.nav`
  display: none;
  position: absolute;
  height: fit-content;
  width: fit-content;
  padding: 0 16px;
  right: 6px;
  min-width: 140px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.main};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

  > div {
    padding: 16px 0;
  }

  > div + div {
    border-top: 1px solid #fff;
  }

  button {
    color: #fff;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.48px;
    background-color: transparent;
    border: none;
  }

  &[data-open="true"] {
    display: block;
  }
`;

export const ContentModal = styled.div`
  border: 1px solid #adb7b5;
  background: #fff;
  width: 799px;
  height: 562px;
  margin: 40px auto 0;
  padding: 70px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 48px 0;

  button {
    margin: 0 auto;
  }
`;
