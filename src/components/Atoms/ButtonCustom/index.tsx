import React, { useEffect } from "react";
import * as S from "./styles";

type TypeOfButtonOptions =
  | "BlueDark"
  | "BlueLight"
  | "BlueGradient"
  | "Login"
  | "Ghost"
  | "ScheduleList";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  typeOfButton: TypeOfButtonOptions;
}
export const ButtonCustom = ({ typeOfButton, ...props }: ButtonProps) => {
  const buttonsOptions = {
    BlueDark: <S.ButtonBlueDark {...props} $disabled={props.disabled} />,
    BlueLight: <S.ButtonBlueLight {...props} $disabled={props.disabled} />,
    BlueGradient: <S.Buttongradiente {...props} $disabled={props.disabled} />,
    Login: <S.ButtonLogin {...props} $disabled={props.disabled} />,
    Ghost: <S.ButtonGhost {...props} $disabled={props.disabled} />,
    ScheduleList: (
      <S.ButtonScheduleListing {...props} $disabled={props.disabled} />
    ),
  };

  return buttonsOptions[typeOfButton];
};
