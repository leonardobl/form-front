import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

export interface ITableItemProps extends ComponentProps<"div"> {
  values: string[];
  columns: string;
  lastElement?: ReactNode;
}

export const TableItem = ({
  values,
  lastElement,
  ...rest
}: ITableItemProps) => {
  return (
    <S.CustomTableItem {...{ values, lastElement, ...rest }}>
      {values.map((i) => (
        <p key={`${Math.random()}`}>{i}</p>
      ))}
      {lastElement && lastElement}
    </S.CustomTableItem>
  );
};
