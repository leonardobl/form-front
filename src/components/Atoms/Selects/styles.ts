import styled, { css } from "styled-components";

export const Container = styled.div<{ $isLabel: boolean }>`
  ${({ $isLabel }) => css`
    font-family: "Roboto";

    position: relative;

    .css-1u9des2-indicatorSeparator {
      display: none;
    }

    .css-1h06qz8-control,
    .css-13cymwt-control {
      border-color: #266bf0;
    }

    .css-1h06qz8-control:hover,
    .css-13cymwt-control:hover {
      border-color: #266bf0;
    }

    .css-1jqq78o-placeholder {
      display: ${$isLabel ? "none" : "block"};
    }

    svg path {
      fill: #266bf0;
    }
  `}
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

export const Required = styled.p<{ $isRequired: boolean }>`
  color: rgba(237, 0, 0, 1);
  position: absolute;
  padding-right: 5px;
  background-color: #fff;
  z-index: 1;
  top: 0;
  right: -8px;
  display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
`;
