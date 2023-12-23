import React, { useState } from "react";
import * as S from "../styles";
import Select, { GroupBase, Props } from "react-select";

export interface ISelectsProps {
  label?: string;
}

export function SimpleSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & ISelectsProps) {
  return (
    <S.Container $isLabel={!!props.label}>
      {props.label && (
        <S.Label>
          {props.label}{" "}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 5 })} />
    </S.Container>
  );
}
