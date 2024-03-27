import React, { ComponentProps, useState } from "react";
import * as S from "./styles";

interface IButtonDotsProps extends ComponentProps<"div"> {
  handleStart: () => void;
  handleWait?: () => void;
}

export const ButtonDots = ({ handleStart, handleWait }: IButtonDotsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.MyMenu onClick={() => setIsOpen((prev) => !prev)}>
      <img src="/assets/svgs/dots.svg" alt="dots" />
      <S.WrapperButtons data-active={isOpen}>
        <div>
          <button onClick={handleStart}>Iniciar</button>
        </div>
        {handleWait && (
          <div>
            <button onClick={handleWait}>Em Espera</button>
          </div>
        )}
      </S.WrapperButtons>
    </S.MyMenu>
  );
};
