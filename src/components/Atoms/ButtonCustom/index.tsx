import React from "react";
import * as S from "./styles";

type TypeOfButtonOptions = "BlueDark" | "BlueLight" | "BlueGradient" | "Login";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  typeOfButton: TypeOfButtonOptions;
}
export const ButtonCustom = ({ typeOfButton, ...props }: ButtonProps) => {
  const buttonsOptions = {
    BlueDark: <S.ButtonBlueDark {...props} />,
    BlueLight: <S.ButtonBlueLight {...props} />,
    BlueGradient: <S.Buttongradiente {...props} />,
    Login: <S.ButtonLogin {...props} />,
  };

  return buttonsOptions[typeOfButton];
};
