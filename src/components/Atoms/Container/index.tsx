import { ComponentProps } from "react";
import * as S from "./stylest";
interface IContainerPros extends ComponentProps<"div"> {}

export const Container = (props: IContainerPros) => {
  return <S.CustomContainer {...props} />;
};
