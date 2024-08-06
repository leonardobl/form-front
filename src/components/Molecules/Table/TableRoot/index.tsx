import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

interface ITableRoot extends ComponentProps<"div"> {
  children: ReactNode;
}

export const TableRoot = ({ children, ...rest }: ITableRoot) => {
  return <S.CustomTable {...rest}>{children}</S.CustomTable>;
};
