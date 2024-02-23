import styled, { css } from "styled-components";

export const Container = styled.div<{ $showIcon?: boolean }>`
  ${({ $showIcon }) => css`
    position: relative;

    .react-datepicker-popper {
      z-index: 2;
    }

    .react-datepicker__navigation_wrapper {
      display: grid;
      grid-template-columns: 0.2fr 1fr 0.3fr;
      align-items: center;
      justify-content: center;

      button {
        position: relative;
      }
    }

    .react-datepicker-wrapper {
      min-width: 100%;

      svg {
        right: 15px;
        top: 5px;
        font-size: 24px;
      }
    }

    .react-datepicker {
      min-width: max-content;
    }

    .react-datepicker__close-icon {
      &::after {
        background-color: transparent;
        color: #12d1a7;
        font-size: 21px;
        position: absolute;
        font-weight: 900;
        right: ${$showIcon ? "50px" : "10px"};
        bottom: 20px;
      }
    }

    .react-datepicker__input-container {
      input {
        width: 100%;
        height: 56px;
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #12d1a7;
        padding: 0 30px;
        color: #111;
        font-family: "Mulish";
        font-size: 16px;
        border: 1px solid #12d1a7;
        font-weight: 600;

        &:focus {
          /* outline: 1px solid #12d1a7; */
          outline: none;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
      -webkit-text-fill-color: #111 !important;
    }
  `}
`;

export const Required = styled.span<{ $isRequired: boolean }>`
  color: rgba(237, 0, 0, 1);
  display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 24px;
  background: linear-gradient(to top, #fff 50%, transparent 50%);
  display: flex;

  padding: 2px 5px;
  font-family: "Mulish";
  color: rgba(0, 0, 0, 0.56);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const ImgLoad = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  display: block;
  right: 50%;
`;
