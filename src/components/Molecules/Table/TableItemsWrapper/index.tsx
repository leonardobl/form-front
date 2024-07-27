import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

interface ITableItemsWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const TableItemsWrapper = ({
  children,
  ...rest
}: ITableItemsWrapperProps) => {
  return <S.CustomTableItems {...rest}>{children}</S.CustomTableItems>;
};
