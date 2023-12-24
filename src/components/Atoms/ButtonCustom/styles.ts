import styled, { css } from "styled-components";

export const Buttongradiente = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    padding: 20px 30px;
    border-radius: 5px;
    background: linear-gradient(180deg, #558fff 0%, #002ed1 100%);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    color: #eee;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.72px;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
  `}
`;

export const ButtonLogin = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    border-radius: 5px;
    background: linear-gradient(181deg, #fff -28.23%, #cacaca 99.08%);
    padding: 15px 75px;
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    color: #002ed1;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  `}
`;

export const ButtonBlueLight = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    padding: 20px 75px;
    border-radius: 5px;
    background: #266bf0;

    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.72px;
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
  `}
`;

export const ButtonBlueDark = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    padding: 20px 75px;
    border-radius: 5px;
    background: #00186d;
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 1.44px;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
  `}
`;

export const ButtonGhost = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 56px;
    background-color: #fff;

    color: #266bf0;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    border: 1px solid #266bf0;
    border-radius: 5px;
  `}
`;
