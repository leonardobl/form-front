import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

export interface ITableHeaderProps extends ComponentProps<"div"> {
  headers: string[];
  columns: string;
  button?: ReactNode;
}

export const TableHeader = ({
  headers,
  button,
  ...rest
}: ITableHeaderProps) => {
  return (
    <S.CustomTableHeader {...{ headers, ...rest }}>
      {headers.map((i) => (
        <h2 key={`${Math.random()}`}>{i}</h2>
      ))}
      {button && button}
    </S.CustomTableHeader>
  );
};
