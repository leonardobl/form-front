import React, { RefAttributes } from "react";
import * as S from "../styles";
import AsyncSelect, { AsyncProps } from "react-select/async";
import { GroupBase } from "react-select";
import { ISelectsProps } from "../SimpleSelect";
import Select from "react-select/dist/declarations/src/Select";

export function AsyncSimpleSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: AsyncProps<Option, IsMulti, Group> &
    RefAttributes<Select<Option, IsMulti, Group>> &
    ISelectsProps
) {
  return (
    <S.Container $isLabel={!!props.label}>
      {props.label && (
        <S.Label>
          {props.label}{" "}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      <AsyncSelect />
    </S.Container>
  );
}
