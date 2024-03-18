import React, { RefAttributes } from "react";
import * as S from "../styles";
import AsyncSelect, { AsyncProps } from "react-select/async";

import { GroupBase, components } from "react-select";

import Select from "react-select/dist/declarations/src/Select";
import { lighten } from "polished";
import { IoCloseOutline } from "react-icons/io5";
import { Theme } from "../../../../Global/Theme";

export function AsyncSimpleSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: AsyncProps<Option, IsMulti, Group> &
    RefAttributes<Select<Option, IsMulti, Group>>
) {
  const myVariant = props.variant;

  const colors = Theme[process.env.REACT_APP_PROJECT]?.colors;

  const customStyles = {
    control: (base: any, state: { isFocused: any }) => ({
      ...base,
      background: "#fff",
      // match with the menu
      borderRadius: 10,
      // letterSpacing: 1,
      padding: props.variant ? "0 40px" : "0 20px",
      fontFamily: "Mulish",
      // color: state.isSelected ? "red" : "blue",
      // Overwrittes the different states of border
      borderColor: colors?.main,
      fontWeight: 600,
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: colors?.main,
      },
    }),
    menu: (base: any, state: any) => ({
      ...base,
      // override border radius to match the box
      width: "100%",
      // kill the gap
      // marginTop: 0,
      zIndex: 2,
      // backgroundColor: "#E1F2EE",
    }),
    menuList: (base: any, state: any) => ({
      ...base,
      // kill the white space on first and last option
      padding: "0",

      borderRadius: 10,
      borderColor: colors?.main,
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: "#111",
    }),
    option: (styles: any, { isFocused, isSelected }: any) => ({
      // ...styles,
      backgroundColor: isFocused ? lighten(0.4, colors?.main) : "transparent",
      color: "#111",
      fontWeight: 600,
      // letterSpacing: 1,
      zindex: 2,
      padding: "10px 20px",
      cursor: "pointer",
      // paddingLeft: "20px",
      fontFamily: "Mulish",
      borderBottom: "1px solid rgba(103, 122, 118, 0.40)",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
    }),
  };

  const DropdownIndicator = (props) => {
    return !myVariant
      ? components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <img
              src="/assets/svgs/arrowDownSelect.svg"
              alt="icone arrow"
              style={{ cursor: "pointer" }}
            />
          </components.DropdownIndicator>
        )
      : null;
  };

  const ClearIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.ClearIndicator {...props}>
          <IoCloseOutline
            size={20}
            style={{ cursor: "pointer", right: "-30px", position: "relative" }}
          />
        </components.ClearIndicator>
      )
    );
  };

  return (
    <S.Container $isLabel={!!props.label} $variantSearch={!!myVariant}>
      {props.label && (
        <S.Label>
          {props.label}{" "}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      <AsyncSelect
        {...props}
        name={props.name}
        components={{ DropdownIndicator, ClearIndicator }}
        theme={(theme) => ({ ...theme, borderRadius: 10 })}
        styles={customStyles}
      />
      {myVariant && (
        <S.IconSearch src="/assets/svgs/icon-search.svg" alt="icone lupa" />
      )}
    </S.Container>
  );
}
