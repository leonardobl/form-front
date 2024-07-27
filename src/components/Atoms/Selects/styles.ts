import styled, { css } from "styled-components";

export const Container = styled.div<{
  $isLabel: boolean;
  $variantSearch?: boolean;
  $bgcolor?: string;
}>`
  ${({ $isLabel, $variantSearch, $bgcolor }) => css`
    &[aria-disabled="true"] {
      cursor: not-allowed;

      .css-1h06qz8-control,
      .css-13cymwt-control,
      .css-1jqq78o-placeholder {
        cursor: not-allowed;
      }
    }

    font-family: "Mulish";

    position: relative;

    input {
      height: 32px;
    }

    .css-1u9des2-indicatorSeparator {
      display: none;
    }

    .css-1h06qz8-control,
    .css-13cymwt-control {
      border-color: #12d1a7;
      background: #f7f7f7;
    }

    .css-894a34-indicatorSeparator {
      display: none;
    }

    .css-1h06qz8-control:hover,
    .css-13cymwt-control:hover {
      border-color: #12d1a7;
    }

    .css-lm8j94-menu,
    .css-gfh3go-menu {
      z-index: 2;
    }

    .css-1jqq78o-placeholder {
      display: ${$isLabel ? "none" : "block"};
    }

    svg {
      cursor: pointer;
    }

    svg path {
      fill: #111;
    }

    ${$bgcolor &&
    css`
      label {
        background: linear-gradient(to top, ${$bgcolor} 50%, transparent 50%);
      }
    `}
  `}
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: -9px;
  left: 16px;
  background: linear-gradient(to top, #fff 50%, transparent 50%);

  display: flex;
  padding: 0 5px;

  color: rgba(0, 0, 0, 0.56);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &[data-variant-modal="true"] {
    background: #e1f2ee;
  }

  &[data-variant-modal2="true"] {
    background: #e8e8e8;
  }
`;

export const Required = styled.span<{ $isRequired: boolean }>`
  color: rgba(237, 0, 0, 1);
  display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
`;

export const IconSearch = styled.img`
  position: absolute;
  top: 50%;
  display: block;
  transform: translateY(-50%);
  left: 20px;
`;
