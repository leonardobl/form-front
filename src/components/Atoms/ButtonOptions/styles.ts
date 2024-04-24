import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.details`
  position: relative;
  z-index: 2;

  width: 182px;
  height: 44px;
  border-radius: 10px;

  /* background: linear-gradient(180deg, #41efc9 0%, #12d1a7 100%); */

  &[data-color-starcheck="true"] {
    background: linear-gradient(180deg, #54acf2 0%, #266bf0 100%);
  }

  &[data-color-log="true"] {
    background: linear-gradient(180deg, #50d05d 11.76%, #50d05d 100%);
  }

  &[data-color-vlx="true"] {
    background: linear-gradient(180deg, #848484 -6.62%, #1c1c1c 100%);
  }

  &[data-color-tokyo="true"] {
    background: linear-gradient(180deg, #fe4f59 0%, #e42e30 100%);
  }

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

  &[data-disabled="true"] {
    background-color: ${lighten(0.8, "#50d05d")};
    pointer-events: none;

    .summary-chevron-up,
    .summary-chevron-down {
      background-color: ${lighten(0.1, "#cecece")};
    }
  }

  .summary-title {
    color: #fff;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    text-transform: capitalize;
    font-weight: 700;
    line-height: 24px;
  }

  &:hover {
    cursor: pointer;
  }

  .summary-content {
    cursor: default;

    border-radius: 5px;
    /* background: linear-gradient(180deg, #2ee3bc 49.6%, #12d1a7 123.68%); */

    &[data-color-starcheck="true"] {
      background: linear-gradient(180deg, #54acf2 0%, #266bf0 100%);
    }

    &[data-color-log="true"] {
      background: linear-gradient(180deg, #50d05d 11.76%, #50d05d 100%);
    }

    &[data-color-vlx="true"] {
      background: linear-gradient(180deg, #848484 -6.62%, #1c1c1c 100%);
    }

    &[data-color-tokyo="true"] {
      background: linear-gradient(180deg, #fe4f59 0%, #e42e30 100%);
    }

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);

    margin-top: 6px;

    button {
      color: #fff;
      text-align: center;
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      text-align: start;
      text-transform: capitalize;

      background-color: transparent;
      padding: 6px;
    }

    > div {
      padding: 0 16px;
    }

    > div:hover {
      /* background-color: ${darken(0.1, "#266bf0")}; */
    }

    > div > div {
      padding: 12px 0;
    }

    > div + div {
      > div {
        height: 100%;
        height: 100%;
        border-top: 1px solid #fff;
      }
    }
  }

  summary {
    list-style: none;
    height: 100%;

    > div:nth-child(1) {
      width: 75%;
      height: 100%;
      display: flex;
      align-items: center;

      span {
        border-right: 2px solid rgba(255, 255, 255, 0.93);
        width: 100%;
      }
    }

    &:focus {
      outline: none;
    }

    &:hover .summary-chevron-up svg {
      opacity: 1;
    }
  }

  .summary-chevron-up svg {
    opacity: 0.7;
  }

  .summary-chevron-up,
  .summary-chevron-down {
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 1em;

    background-color: ${(props) => props.theme.colors.main};
    /* box-shadow: 0px 0px 7.6px 2px #12d1a7 inset; */
    /* filter: drop-shadow(1px 1px 1.6px #29a086); */

    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);

    svg {
      display: block;
    }
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;

export const ArrowDown = styled.img`
  transform: rotateZ(90deg);
`;

export const ModalContent = styled.div`
  width: 685px;
  height: fit-content;
  background: #e8e8e8;
  box-shadow: 4px 4px 16.3px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderModal = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 24px;

  > p {
    text-align: start;
  }
`;

export const WrapperButtonClose = styled.div`
  display: flex;
  justify-content: end;

  button {
    color: #2d2d2d;
    font-family: Mulish;
    background-color: transparent;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 166.667% */
  }
`;

export const WrapperText = styled.div`
  padding: 24px;

  > h4 {
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    margin-bottom: 10px;
  }

  > p {
    color: #7c848b;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    margin-bottom: 24px;

    span {
      font-weight: 700;
    }
  }

  p:nth-child(4) {
    margin-bottom: 48px;
  }
`;

export const WrapperButtonsModal = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;

  > :nth-child(1) {
    background-color: transparent;
    color: #2d2d2d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;
