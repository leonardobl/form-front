import React, { useState } from "react";
import * as S from "./styles";
import Select, {
  GroupBase,
  InputActionMeta,
  OnChangeValue,
  Props,
} from "react-select";

interface ISelectProps {
  label?: string;
}

export function SimpleSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & ISelectProps) {
  return (
    <S.Container $isLabel={!!props.label}>
      {props.label && <S.Label>{props.label}</S.Label>}
      <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 5 })} />
    </S.Container>
  );
}
