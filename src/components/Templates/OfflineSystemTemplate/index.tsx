import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";

export const OfflineSystemTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <img src="/assets/imgs/atention-icon.svg" alt="icone de atenção" />
          <S.Title>SISTEMA FORA DO AR</S.Title>
          <S.Text>
            Direcione-se até a <S.TextBlue>ECV</S.TextBlue> ou{" "}
            <S.TextBlue>CIRETRAN</S.TextBlue> mais próxima para realização do
            seu serviço.
          </S.Text>
          <S.WrapperContacts>
            <S.SectionTitle>Contatos</S.SectionTitle>
            <S.Flex>
              <div>
                <S.Subtitle>Caxias / MA</S.Subtitle>
                <S.Subtitle>São Luís / MA</S.Subtitle>
                <S.Contact>(98) 98562-0425</S.Contact>
              </div>
              <div>
                <S.Subtitle>Codó / MA</S.Subtitle>
                <S.Subtitle>Bacabal / MA</S.Subtitle>
                <S.Contact>(99) 99128-2316</S.Contact>
              </div>
            </S.Flex>
            <div>
              <S.Subtitle>Codó / MA</S.Subtitle>
              <S.Subtitle>Bacabal / MA</S.Subtitle>
              <S.Contact>(99) 99128-2316</S.Contact>
            </div>
          </S.WrapperContacts>
          <S.SectionLocationWrapperCardsMap>
            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Calhau
                  <br /> São Luís / MA
                </span>
              </S.TitleLocalization>
              <p>
                Rua Chapadinha N.04 - Quadra 40,
                <br />
                <S.TextStrong> CEP 65072-852</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>

            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Centro
                  <br /> Bacabal / MA
                </span>
              </S.TitleLocalization>
              <p>
                Br 316, SN Centro,
                <br />
                <S.TextStrong> CEP 65900-724</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>

            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Potosí
                  <br /> Balsas / MA
                </span>
              </S.TitleLocalization>
              <p>
                Rua Contorno N 4144B
                <br /> <S.TextStrong>CEP 658000-000</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>

            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  São Castelo
                  <br /> Pinheiro / MA
                </span>
              </S.TitleLocalization>
              <p>
                Rua Pedro Amengol, S/N
                <br /> <S.TextStrong>CEP 65200-000</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>
          </S.SectionLocationWrapperCardsMap>
          <S.Flex>
            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Volta Redonda
                  <br /> Caxias / MA
                </span>
              </S.TitleLocalization>
              <p>
                Av. Alexandre Costa, 3480
                <br /> <S.TextStrong>CEP 65000-300</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>

            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Santa Lúcia
                  <br /> Codó / MA
                </span>
              </S.TitleLocalization>
              <p>
                R. Francisco Bernardino, 1442
                <br /> <S.TextStrong>CEP 65400-00</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>

            <S.SectionLocationCardMap>
              <S.TitleLocalization>
                <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                <span>
                  Bela Vista
                  <br /> Riachão / MA
                </span>
              </S.TitleLocalization>
              <p>
                Rua 31 de Dezembro, N188
                <br /> <S.TextStrong>CEP 65990-000</S.TextStrong>
              </p>
            </S.SectionLocationCardMap>
          </S.Flex>
        </S.Content>
      </S.Container>
    </LayoutTemplate>
  );
};
