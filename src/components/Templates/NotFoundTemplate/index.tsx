import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { useNavigate } from "react-router-dom";

export const NotFoundTemplate = () => {
  const navigate = useNavigate();

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Wrapper>
          <h1>404</h1>
          <p className="primary">Desculpe, página não encontrada</p>
          <p className="second">A página solicitada não pode ser encontrada.</p>
          <Button onClick={() => navigate("/")}>Acessar a Home</Button>
        </S.Wrapper>
      </S.Container>
    </LayoutTemplate>
  );
};
