import React, { ComponentProps, useState } from "react";
import * as S from "./styles";

interface IButtonDotsProps extends ComponentProps<"div"> {}

export const ButtonDots = (props: IButtonDotsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.MyMenu onClick={() => setIsOpen((prev) => !prev)}>
      <img src="/assets/svgs/dots.svg" alt="dots" />
      <S.WrapperButtons data-active={isOpen}>
        <div>
          <button>Iniciar</button>
        </div>
        <div>
          <button>Em Espera</button>
        </div>
      </S.WrapperButtons>
    </S.MyMenu>
  );
};
