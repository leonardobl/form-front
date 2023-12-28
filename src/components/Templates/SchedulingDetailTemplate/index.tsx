import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";

export const SchedulingDetailTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.TItle>Meu agendamento</S.TItle>
          <S.Text>
            Esses são os dados do seu <S.TextBlue>agendamento</S.TextBlue>!
          </S.Text>
          <S.Form>
            <S.WrapperBorder $borderBottom>
              <S.Grid $gridTemplate="3fr 1fr 1fr">
                <S.SubTitle>Status</S.SubTitle>

                <S.SubTitle>Data</S.SubTitle>
                <S.SubTitle>Horário</S.SubTitle>

                <InputCustom
                  readOnly
                  value={"Aguardando confirmação do pagamento"}
                />

                <InputCustom readOnly placeholder="__/__/__" />
                <InputCustom readOnly />
              </S.Grid>
            </S.WrapperBorder>

            <S.WrapperBorder $borderBottom>
              <S.Grid $gridTemplate="8fr 4fr">
                <S.SubTitle>Cliente</S.SubTitle>
                <S.SubTitle>CPF/CNPJ</S.SubTitle>

                <InputCustom readOnly />
                <InputCustom readOnly />
              </S.Grid>

              <S.Grid $gridTemplate="5fr 2fr 2fr">
                <S.SubTitle>Modelo do carro</S.SubTitle>
                <S.SubTitle>Placa</S.SubTitle>
                <S.SubTitle>Renavam</S.SubTitle>
                <InputCustom readOnly />
                <InputCustom readOnly />
                <InputCustom readOnly />
              </S.Grid>

              <S.Grid $gridTemplate="1fr">
                <S.SubTitle>Chassi</S.SubTitle>
                <InputCustom readOnly />
              </S.Grid>
            </S.WrapperBorder>

            <S.WrapperBorder>
              <S.Grid $gridTemplate="8fr 4fr">
                <S.SubTitle>Serviço</S.SubTitle>
                <S.SubTitle>Valor do serviço</S.SubTitle>

                <InputCustom readOnly />

                <InputCustom readOnly />
              </S.Grid>
              <S.Grid $gridTemplate="12fr">
                <S.SubTitle>Local de realização da vistoria</S.SubTitle>
                <InputCustom readOnly />
              </S.Grid>
            </S.WrapperBorder>
          </S.Form>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
