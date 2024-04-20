import styled from "styled-components";

export const MyMenu = styled.div`
  position: relative;
  display: flex;

  > img {
    padding: 5px;
    cursor: pointer;
  }
`;

export const WrapperButtons = styled.div`
  background: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  padding: 0 16px;
  position: absolute;
  right: 6px;
  top: 20px;
  z-index: 1;
  display: none;

  button {
    color: #fff;
    border: none;
    background: transparent;
    text-align: left;
    display: block;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px; /* 193.75% */
    letter-spacing: 0.48px;
    white-space: nowrap;
  }

  > div {
    padding: 12px 0;
  }

  > div + div {
    border-top: 1px solid #fff;
  }

  &[data-active="true"] {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentModalStay = styled.div`
  width: 648px;
  height: 518px;
  border: 0.5px solid #000;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 48px;

  > p {
    max-width: 466px;
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  gap: 0 48px;
`;
