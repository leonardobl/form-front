import React, { Ref } from "react";
import * as S from "../styles";
import { lighten } from "polished";
import { Theme } from "../../../../Global/Theme";

import Select, {
  GroupBase,
  Props,
  SelectInstance,
  components,
} from "react-select";
import { IoCloseOutline } from "react-icons/io5";

export const SimpleSelectRHF = React.forwardRef<SelectInstance, Props>(
  function ReactSelect<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
  >(
    props: Props<Option, IsMulti, Group>,
    ref: Ref<SelectInstance<Option, IsMulti, Group>>
  ) {
    const myVariant = props.variant;
    const colors = Theme[process.env.REACT_APP_PROJECT]?.colors;

    const ClearIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.ClearIndicator {...props}>
            <IoCloseOutline
              size={20}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            />
          </components.ClearIndicator>
        )
      );
    };

    const customStyles = {
      control: (base: any, state: { isFocused: any }) => ({
        ...base,
        // background: myVariant === "modal" ? "#E1F2EE" : "#fff",
        background: "#fff",

        // match with the menu
        borderRadius: 10,
        // letterSpacing: 10,

        padding: "0 20px",
        fontFamily: "Mulish",
        // color: state.isSelected ? "red" : "blue",
        // Overwrittes the different states of border
        borderColor: "#9d9d9d",
        // fontWeight: 600,
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: "#9d9d9d",
        },
      }),

      menu: (base: any, state: any) => ({
        ...base,
        // override border radius to match the box
        width: "100%",
        // kill the gap
        // marginTop: 0,
        zIndex: 2,
      }),
      menuList: (base: any, state: any) => ({
        ...base,
        // kill the white space on first and last option
        // padding: 0,

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
        // fontWeight: 600,
        // letterSpacing: 1,
        zindex: 2,
        padding: "10px 20px",
        cursor: "pointer",
        // paddingLeft: "20px",
        fontFamily: "Mulish",
      }),
      valueContainer: (provided: any, state: any) => ({
        ...provided,
      }),

      dropdownIndicator: (base, state) => {
        let changes = {
          padding: 0,
        };
        return Object.assign(base, changes);
      },
    };

    const DropdownIndicator = (props) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator {...props}>
            <img
              src="/assets/svgs/arrowDownSelect.svg"
              alt="icone arrow"
              style={{ cursor: "pointer" }}
            />
          </components.DropdownIndicator>
        )
      );
    };

    return (
      <S.Container $isLabel={!!props.label}>
        {props.label && (
          <S.Label
            data-variant-modal={myVariant === "modal"}
            htmlFor={props.inputId}
          >
            {props.label}{" "}
            <S.Required $isRequired={!!props.required}>*</S.Required>
          </S.Label>
        )}
        <Select
          {...props}
          name={props.name}
          required={false}
          ref={ref}
          components={{ DropdownIndicator, ClearIndicator }}
          theme={(theme) => ({ ...theme, borderRadius: 10 })}
          styles={customStyles}
        />
      </S.Container>
    );
  }
);
