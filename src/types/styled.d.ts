import "styled-components";

import { STARCHECK } from "../Global/StarCheckTheme";

export type ITheme = typeof STARCHECK;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
