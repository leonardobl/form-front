import "styled-components";

import { Theme } from "../Global/Theme";

export type ITheme = typeof Theme.starcheck;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
