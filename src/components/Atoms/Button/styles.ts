import styled, { css } from "styled-components";

export const Button = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);

    border-radius: 5px;
    background: #266bf0;
    height: 56px;
    max-width: 200px;
    min-width: 200px;
    padding: 0 20px;
    font-family: Poppins;
    white-space: nowrap;

    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.6px;
    text-transform: uppercase;

    &[data-variant-degrade="true"] {
      background: linear-gradient(180deg, #558fff 0%, #002ed1 100%);
      max-width: 250px;
      min-width: 250px;
    }

    &[data-variant-dark="true"] {
      background: #00186d;
    }

    &[data-variant-login="true"] {
      background: linear-gradient(181deg, #fff -28.23%, #cacaca 99.08%);
      color: #00186d;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
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
      max-width: 200px;
      max-width: 200px;
      white-space: normal;
      padding: 10px;

      font-family: Roboto;
    }

    &[data-variant-ghost="true"] {
      color: #717171;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.48px;
      border: none;
      text-transform: none;
      background: none;
      max-width: fit-content;
      box-shadow: none;
      white-space: nowrap;
    }

    @media (max-width: 500px) {
      max-width: 160px;
      font-size: 16px;
      height: 45px;
      padding: 0 10px;

      &[data-variant-login="true"] {
        max-width: 160px;
      }
    }
  `}
`;
