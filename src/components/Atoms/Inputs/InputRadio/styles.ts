import styled from "styled-components";
import { IInputCheckSlideProps } from ".";

interface ICustomInputRadioSlideContainerProps {
  checked: boolean;
}

export const CustomInputRadioSlideContainer = styled.label<ICustomInputRadioSlideContainerProps>`
  position: relative;
  height: 14px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &::before {
    display: block;
    content: "";
    border: 3px solid ${(props) => (props.checked ? "#2D2D2D" : "#9d9d9d")};
    width: 30px;
    height: 100%;
    border-radius: 10px;
    position: absolute;
  }

  &::after {
    transition: all 0.1s linear;
    display: block;
    content: "";
    background-color: ${(props) => (props.checked ? "#2D2D2D" : "#9d9d9d")};
    width: 13px;
    height: 13px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => (props.checked ? "15px" : "2px")};
  }
`;

export const CustomInputRadioSlide = styled.input<IInputCheckSlideProps>`
  display: none;
`;
