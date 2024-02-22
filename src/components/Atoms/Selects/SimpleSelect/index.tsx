import React, { Ref } from "react";
import * as S from "../styles";
import { lighten } from "polished";

import Select, { GroupBase, Props, SelectInstance } from "react-select";

export const SimpleSelect = React.forwardRef<SelectInstance, Props>(
  function ReactSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  >(
    props: Props<Option, IsMulti, Group>,
    ref: Ref<SelectInstance<Option, IsMulti, Group>>
  ) {
    const customStyles = {
      control: (base: any, state: { isFocused: any }) => ({
        ...base,
        background: "#fff",
        // match with the menu
        borderRadius: 10,
        letterSpacing: 1,

        padding: "0 20px",
        fontFamily: "Mulish",
        // color: state.isSelected ? "red" : "blue",
        // Overwrittes the different states of border
        borderColor: "#12D1A7",
        fontWeight: 600,
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: "#12D1A7",
        },
      }),
      menu: (base: any, state: any) => ({
        ...base,
        // override border radius to match the box
        width: "100%",
        // kill the gap
        // marginTop: 0,
      }),
      menuList: (base: any, state: any) => ({
        ...base,
        // kill the white space on first and last option
        // padding: 0,

        borderRadius: 10,
        borderColor: "#12D1A7",
      }),
      singleValue: (provided: any, state: any) => ({
        ...provided,
        color: "#111",
      }),
      option: (styles: any, { isFocused, isSelected }: any) => ({
        // ...styles,
        backgroundColor: isFocused ? lighten(0.45, "#12D1A7") : "transparent",
        color: "#111",
        fontWeight: 600,
        letterSpacing: 1,
        zindex: 2,
        padding: "10px 20px",
        cursor: "pointer",
        // paddingLeft: "20px",
        fontFamily: "Mulish",
      }),
      valueContainer: (provided: any, state: any) => ({
        ...provided,
      }),
    };

    return (
      <S.Container $isLabel={!!props.label}>
        {props.label && (
          <S.Label>
            {props.label}{" "}
            <S.Required $isRequired={!!props.required}>*</S.Required>
          </S.Label>
        )}
        <Select
          {...props}
          name={props.name}
          ref={ref}
          theme={(theme) => ({ ...theme, borderRadius: 10 })}
          styles={customStyles}
        />
      </S.Container>
    );
  }
);
