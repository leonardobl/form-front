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
    color: ${(props) => props.theme.colors.main};
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

  &[data-variant-modal="true"] {
    background: #e1f2ee;
  }

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
    border: 1px solid ${(props) => props.theme.colors.main};
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

    &[data-variant-edit="true"] {
      padding-right: 50px;
    }

    &:focus {
      outline: none;
    }

    &[data-variant-modal="true"] {
      background-color: #e1f2ee;
    }

    &::selection {
      background-color: ${(props) => props.theme.colors.main};
      color: #fff;
    }

    &:read-only {
      border: 1px solid #adb7b5;
    }
  `}
`;

export const IconEdit = styled.img`
  display: block;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  &[data-color-starcheck="true"] {
    filter: brightness(0) saturate(100%) invert(37%) sepia(35%) saturate(7494%)
      hue-rotate(212deg) brightness(96%) contrast(97%);
  }

  &[data-color-log="true"] {
    filter: brightness(0) saturate(100%) invert(61%) sepia(73%) saturate(1014%)
      hue-rotate(117deg) brightness(97%) contrast(86%);
  }

  &[data-color-vlx="true"] {
    filter: brightness(0) saturate(100%) invert(0%) sepia(5%) saturate(2391%)
      hue-rotate(330deg) brightness(86%) contrast(91%);
  }

  &[data-color-tokyo="true"] {
    filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(4426%)
      hue-rotate(345deg) brightness(92%) contrast(93%);
  }
`;
