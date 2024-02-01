import React from "react";
import * as S from "./styles";
import { Footer } from "../../Molecules/Footer";
import { Button } from "../../Atoms/Button";

export const NotFoundTemplate = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderContent>
          <img
            src="/assets/imgs/logo-starcheck01.svg"
            alt="logo starcheck"
            onClick={() => window.open("/", "_self")}
          />
        </S.HeaderContent>
      </S.Header>
      <S.Content>
        <S.Card>
          <h1>404</h1>
          <h3>Desculpe, página não encontrada</h3>
          <p>A página solicitada não pode ser encontrada.</p>
          <Button
            data-variant-degrade
            onClick={() => window.open("/", "_self")}
          >
            ACESSAR A HOME
          </Button>
        </S.Card>
      </S.Content>
      <Footer />
    </S.Container>
  );
};
