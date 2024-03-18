import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ICustomButton extends ComponentProps<"button"> {}

export const Button = (props: ICustomButton) => {
  return (
    <S.Button
      {...props}
      data-color-starcheck={process.env.REACT_APP_PROJECT === "starcheck"}
      data-color-log={process.env.REACT_APP_PROJECT === "log"}
      data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
      data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
    />
  );
};
