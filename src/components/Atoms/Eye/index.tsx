import { ComponentProps } from "react";
import * as S from "./styles";

interface ICustomEyeProps extends ComponentProps<"img"> {}

export const Eye = (props: ICustomEyeProps) => {
  return (
    <S.CustomEye
      src="/assets/svgs/eye.svg"
      alt="icone visualizacao"
      data-color-starcheck={process.env.REACT_APP_PROJECT === "starcheck"}
      data-color-log={process.env.REACT_APP_PROJECT === "log"}
      data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
      data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
      {...props}
    />
  );
};
