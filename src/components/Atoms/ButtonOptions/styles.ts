import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.details`
  position: relative;
  z-index: 2;

  width: 182px;
  height: 44px;
  border-radius: 10px;

  background: linear-gradient(180deg, #41efc9 0%, #12d1a7 100%);
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
    background: linear-gradient(180deg, #2ee3bc 49.6%, #12d1a7 123.68%);
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

    background-color: #12d1a7;
    box-shadow: 0px 0px 7.6px 2px #12d1a7 inset;
    filter: drop-shadow(1px 1px 1.6px #29a086);

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
  padding: 102px 132px;
  background: #50d05d;

  p {
    color: #111111;
    font-family: Lato;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 475px;
    margin-bottom: 40px;
  }

  button {
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 500px) {
    padding: 32px 48px;

    p {
      font-size: 18px;
      line-height: 24px;
      max-width: 200px;
      margin: 0 auto 24px;
    }
  }
`;
