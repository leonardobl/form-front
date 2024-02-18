import "styled-components";

import { Theme } from "../Global/StarCheckTheme";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
