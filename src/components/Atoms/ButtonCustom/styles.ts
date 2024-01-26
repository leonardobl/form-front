import styled, { css } from "styled-components";

export const Buttongradiente = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    display: block;
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

    @media (max-width: 500px) {
      display: flex;
      width: 160px;
      height: 45px;
      padding: 10px 25px;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      letter-spacing: 0.36px;
      white-space: nowrap;
    }
  `}
`;

export const ButtonLogin = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    border-radius: 5px;
    background: linear-gradient(181deg, #fff -28.23%, #cacaca 99.08%);
    padding: 15px 75px;
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    display: block;
    color: #00186d;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    @media (max-width: 500px) {
      width: fit-content;
      height: 32px;

      padding: 20px 20px;
      display: flex;
      white-space: nowrap;
      justify-content: center;
      align-items: center;

      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  `}
`;

export const ButtonBlueLight = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    padding: 0 50px;
    border-radius: 5px;
    height: 60px;
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

    @media (max-width: 500px) {
      display: flex;
      width: 160px;
      height: 45px;
      padding: 0 40px;

      justify-content: center;
      align-items: center;

      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      letter-spacing: 0.36px;
    }
  `}
`;

export const ButtonBlueDark = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    padding: 0 50px;
    height: 60px;
    border-radius: 5px;
    background: #00186d;
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 1.44px;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.31);

    @media (max-width: 500px) {
      display: flex;
      width: 160px;
      height: 45px;

      justify-content: center;
      align-items: center;

      font-size: 12px;
      line-height: 20px;
      letter-spacing: 0.36px;
    }
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
    cursor: ${$disabled ? "not-allowed" : "pointer"};

    color: #266bf0;
    text-align: center;
    font-family: "Roboto";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    border: 1px solid #266bf0;
    border-radius: 5px;

    @media (max-width: 500px) {
      display: flex;
      width: 140px;
      height: 44px;
      align-items: center;
      justify-content: center;

      font-size: 16px;
      padding: 0;
      font-weight: 500;
      line-height: 20px;
      white-space: pre-wrap;
      text-transform: uppercase;
    }
  `}
`;

export const ButtonScheduleListing = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    border-radius: 5px;
    background: #266bf0;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    color: #eee;
    font-family: "Poppins";
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    padding: 2px 8px;
    letter-spacing: 0.24px;
    cursor: ${$disabled ? "not-allowed" : "pointer"};
  `}
`;

export const ButtonNoBorder = styled.button<{ $disabled?: boolean }>`
  ${({ $disabled }) => css`
    border: none;
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    color: #717171;
    background-color: transparent;
    text-align: center;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    line-height: 24px;
    letter-spacing: 0.54px;
    width: max-content;

    @media (max-width: 500px) {
      font-size: 15px;
      padding: 10px 10px;
    }
  `}
`;
