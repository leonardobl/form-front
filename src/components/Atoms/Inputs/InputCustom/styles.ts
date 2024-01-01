import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  svg {
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 16px;
    color: rgba(38, 107, 240, 1);
  }
`;

export const Label = styled.label<{ $isRequired: boolean }>`
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 10px;
  background-color: #fff;
  display: block;
  padding: 2px 5px;

  color: rgba(0, 0, 0, 0.56);
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  span {
    color: rgba(237, 0, 0, 1);
    position: absolute;
    padding-right: 5px;
    background-color: #fff;
    z-index: 1;
    top: 0;
    right: -8px;
    display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
  }
`;

export const Input = styled.input<{ typeInput: string }>`
  ${({ typeInput }) => css`
    width: 100%;
    height: 48px;
    border: 1px solid rgba(38, 107, 240, 1);
    border-radius: 5px;
    padding: ${typeInput === "password" ? "0 40px 0 10px" : "0 10px"};
    font-size: 16px;
    font-family: "Roboto";

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      outline: 1px solid rgba(38, 107, 240, 1);
    }
  `}
`;
