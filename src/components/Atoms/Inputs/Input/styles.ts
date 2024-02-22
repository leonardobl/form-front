import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #111 !important;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 19px;
    color: #12d1a7;
  }
`;

export const Label = styled.label<{ $isRequired: boolean }>`
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 24px;
  background: linear-gradient(to top, #fff 50%, transparent 50%);
  display: flex;
  padding: 2px 5px;

  color: rgba(0, 0, 0, 0.56);
  font-family: "Mulish";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  span {
    color: rgba(237, 0, 0, 1);
    display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
  }
`;

export const Input = styled.input<{ $typeInput?: string }>`
  ${({ $typeInput }) => css`
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #12d1a7;
    background-color: #fff;
    padding: ${$typeInput === "password" ? "0 40px 0 20px" : "0 20px"};
    font-size: 18px;
    font-family: "Mulish";
    font-weight: 400;
    color: #111;
    letter-spacing: 1;

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }

    &::selection {
      background-color: #12d1a7;
      color: #fff;
    }
  `}
`;
