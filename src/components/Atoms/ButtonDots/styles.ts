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
  background: #e8e8e8;
  padding: 16px;
  width: 580px;

  p#close {
    color: var(--PADO-1, #2d2d2d);
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 66.667% */
    text-align: end;
    cursor: pointer;
    margin-bottom: 60px;
  }
`;

export const WrapperContentModal = styled.div`
  padding: 12px 32px 32px;

  p {
    margin-bottom: 48px;
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */

    span {
      font-weight: 700;
      display: inline;
    }
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  gap: 0 16px;
  justify-content: end;

  > :nth-child(1) {
    color: var(--PADO-1, #2d2d2d);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    background-color: transparent;
    box-shadow: none;
  }
`;
