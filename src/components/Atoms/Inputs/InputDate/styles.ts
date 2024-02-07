import styled, { css } from "styled-components";

export const Container = styled.div<{ $showIcon: boolean }>`
  ${({ $showIcon }) => css`
    position: relative;
    width: 100%;

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
      width: 100%;

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
        color: rgba(38, 107, 240, 1);
        font-size: 21px;
        position: absolute;
        font-weight: 900;
        right: ${$showIcon ? "50px" : "10px"};
        bottom: 18px;
      }
    }

    .react-datepicker__input-container {
      input {
        height: 50px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid red;
        padding: 0 10px;

        font-family: "Roboto";
        font-size: 16px;
        border: 1px solid rgba(38, 107, 240, 1);

        &:focus {
          outline: 1px solid rgba(38, 107, 240, 1);
        }

        &:disabled {
          border: 1px solid rgb(230, 230, 230);
          cursor: not-allowed;
        }
      }
    }
  `}
`;

export const Required = styled.span<{ $isRequired: boolean }>`
  color: rgba(237, 0, 0, 1);
  position: absolute;
  padding-right: 5px;
  background-color: #fff;
  z-index: 1;
  top: 3px;
  font-size: 16px;
  right: -10px;
  display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
`;

export const Label = styled.label`
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
