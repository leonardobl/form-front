import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

export interface ITableItemProps extends ComponentProps<"div"> {
  values?: string[];
  columns: string;
  elements?: ReactNode[];
  lastElement?: ReactNode;
}

export const TableItem = ({
  values,
  lastElement,
  elements,
  ...rest
}: ITableItemProps) => {
  return (
    <S.CustomTableItem {...{ values, lastElement, ...rest }}>
      {values?.length > 0 &&
        values.map((i) => <p key={`${Math.random()}`}>{i}</p>)}

      {elements?.length > 0 && elements.map((i) => i)}
      {lastElement && lastElement}
    </S.CustomTableItem>
  );
};
