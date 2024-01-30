import styled, { css } from "styled-components";

export const Button = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);

    border-radius: 5px;
    background: #266bf0;
    height: 60px;
    min-width: 240px;
    padding: 0 20px;
    font-family: Poppins;

    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    &[data-variant-degrade="true"] {
      background: linear-gradient(180deg, #558fff 0%, #002ed1 100%);
    }

    &[data-variant-dark="true"] {
      background: #00186d;
    }

    &[data-variant-login="true"] {
      background: linear-gradient(181deg, #fff -28.23%, #cacaca 99.08%);
      color: #00186d;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      min-width: 200px;
      text-transform: none;
    }

    &[data-variant-border="true"] {
      color: #266bf0;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      background: transparent;
      box-shadow: none;
      border: 2px solid #266bf0;
      min-width: 160px;
      max-width: 160px;
      padding: 10px;
    }

    &[data-variant-ghost="true"] {
      color: #717171;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.48px;
      border: none;
      text-transform: none;
      background: none;
      min-width: fit-content;
      box-shadow: none;
      white-space: nowrap;
    }

    @media (max-width: 500px) {
      min-width: 160px;
      font-size: 12px;
      height: 45px;
      padding: 0 10px;
    }
  `}
`;
