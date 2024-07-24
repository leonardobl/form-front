import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.mobile} 20px;

  h1 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: 0.6px;
    margin-bottom: 32px;
  }

  @media (min-width: 640px) {
    padding: ${(props) => props.theme.padding.primary} 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 32px 16px;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 100%;
  max-width: 700px;

  grid-template-areas: "title1 title1" "nome nome" "cep cep" "rua rua" "numero complemento" "bairro bairro" "uf cidade" "title2 title2" "iugo iugo" "title3 title3" "tmedio tmedio" "qvagas qvagas" "title4 title4" "hinicio1 hinicio1" "hfinal1 hfinal1" "title5 title5" "hinicio2 hinicio2" "hfinal2 hfinal2" "title6 title6" "hinicio3 hinicio3" "hfinal3 hfinal3" "buttom buttom";

  > :nth-child(1) {
    grid-area: title1;
  }

  > :nth-child(2) {
    grid-area: nome;
  }

  > :nth-child(3) {
    grid-area: cep;
  }

  > :nth-child(4) {
    grid-area: rua;
  }

  > :nth-child(5) {
    grid-area: numero;
  }

  > :nth-child(6) {
    grid-area: complemento;
  }

  > :nth-child(7) {
    grid-area: bairro;
  }

  > :nth-child(8) {
    grid-area: uf;
  }

  > :nth-child(9) {
    grid-area: cidade;
  }

  > :nth-child(10) {
    grid-area: title2;
  }

  > :nth-child(11) {
    grid-area: iugo;
  }

  > :nth-child(12) {
    grid-area: title3;
  }

  > :nth-child(13) {
    grid-area: tmedio;
  }

  > :nth-child(14) {
    grid-area: qvagas;
  }

  > :nth-child(15) {
    grid-area: title4;
  }

  > :nth-child(16) {
    grid-area: hinicio1;
  }

  > :nth-child(17) {
    grid-area: hfinal1;
  }

  > :nth-child(18) {
    grid-area: title5;
  }

  > :nth-child(19) {
    grid-area: hinicio2;
  }

  > :nth-child(20) {
    grid-area: hfinal2;
  }

  > :nth-child(21) {
    grid-area: title6;
  }

  > :nth-child(22) {
    grid-area: hinicio3;
  }

  > :nth-child(23) {
    grid-area: hfinal3;
  }

  > :nth-child(24) {
    grid-area: buttom;
    margin: 0 auto;
  }

  h3 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  h4 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    width: fit-content;
    padding: 4px 8px;
    margin: 0 auto;
    border-radius: 2px;
    background: #f7f7f7;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(6, 1fr);

    grid-template-areas:
      ". . title1 title1 . ."
      "nome nome nome nome nome nome"
      "cep cep cep rua rua rua"
      "numero numero numero complemento complemento complemento"
      "bairro bairro uf uf cidade cidade"
      ". . title2 title2 . ."
      "iugo iugo iugo iugo iugo iugo"
      ". . title3 title3 . ."
      "tmedio tmedio tmedio qvagas qvagas qvagas"
      ". . title4 title4 . ."
      "hinicio1 hinicio1 hinicio1 hfinal1 hfinal1 hfinal1"
      ". . title5 title5 . ."
      "hinicio2 hinicio2 hinicio2 hfinal2 hfinal2 hfinal2"
      ". . title6 title6 . ."
      "hinicio3 hinicio3 hinicio3 hfinal3 hfinal3 hfinal3"
      ". . buttom buttom . .";
  }
`;
