import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    width: 128px;
    height: 44px;

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 8px;

    &[data-color-starcheck="true"] {
      /* background: linear-gradient(180deg, #54acf2 0%, #266bf0 100%); */
      background: #266bf0;
    }

    &[data-color-log="true"] {
      /* background: linear-gradient(180deg, #83d58c 11.76%, #50d05d 100%); */
      background: #50d05d;
    }

    &[data-color-vlx="true"] {
      /* background: linear-gradient(180deg, #848484 -6.62%, #1c1c1c 100%); */
      background: #1c1c1c;
    }

    &[data-color-tokyo="true"] {
      /* background: linear-gradient(180deg, #fe4f59 0%, #e42e30 100%); */
      background: #e42e30;
    }

    &[data-variant-danger="true"] {
      border-radius: 10px;
      background: #ed0000;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
    }

    &[data-variant-text="true"] {
      width: fit-content;
      outline: none;
      background: transparent;
      box-shadow: none;
      color: #2d2d2d;
    }

    &[data-variant-outline="true"] {
      border-radius: 10px;
      border: 1px solid #2d2d2d;
      background: transparent;
      box-shadow: none;
      color: #2d2d2d;
    }

    box-shadow: 0px 4px 4px 0px #00000033;

    font-family: Mulish;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    text-transform: capitalize;

    &:disabled {
      cursor: not-allowed;
      background: #b8b8b8;
    }
  `}
`;
