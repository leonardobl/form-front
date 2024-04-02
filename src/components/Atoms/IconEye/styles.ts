import styled from "styled-components";

export const MyEye = styled.img`
  &[data-color-starcheck="true"] {
    filter: brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(585%)
      hue-rotate(180deg) brightness(98%) contrast(94%);
  }

  &[data-color-log="true"] {
    filter: brightness(0) saturate(100%) invert(79%) sepia(16%) saturate(968%)
      hue-rotate(76deg) brightness(96%) contrast(85%);
  }

  &[data-color-vlx="true"] {
    filter: brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(79%)
      hue-rotate(181deg) brightness(95%) contrast(81%);
  }

  &[data-color-tokyo="true"] {
    filter: brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(4716%)
      hue-rotate(328deg) brightness(103%) contrast(98%);
  }
`;
