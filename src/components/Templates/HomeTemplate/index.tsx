import React, { useEffect } from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { useContextSite } from "../../../context/Context";

export const HomeTemplate = () => {
  const { setIsLoad } = useContextSite();

  return (
    <LayoutTemplate>
      <S.Container>
        <S.SectioStarCheck>
          <S.SectioStarCheckContent>
            <S.SectioStarCheckLeftSide>
              <S.SectioStarCheckLeftSideWrapper>
                <S.Title>
                  Star{" "}
                  <span>
                    Check{" "}
                    <img
                      src="assets/imgs/check-icon.svg"
                      alt="icone de checado"
                    />
                  </span>
                </S.Title>

                <p>
                  Bem-vindo à <S.TextStrong>StarCheck</S.TextStrong>, sua
                  empresa de <S.TextBlue>Vistoria Veicular</S.TextBlue>,
                  especializada em análises precisas que garantem segurança e
                  transparência.
                </p>
                <Link to={"agendamento"}>
                  <ButtonCustom typeOfButton="BlueGradient">
                    AGENDAR VISTORIA
                  </ButtonCustom>
                </Link>
              </S.SectioStarCheckLeftSideWrapper>
            </S.SectioStarCheckLeftSide>
            <S.SectioStarCheckRightSide>
              <S.SectioStarCheckRightSideWrapper>
                <img src="assets/imgs/Rectangle.svg" alt="icone de checado" />
              </S.SectioStarCheckRightSideWrapper>
            </S.SectioStarCheckRightSide>
          </S.SectioStarCheckContent>
        </S.SectioStarCheck>
        <S.SectionAbout id="sobre">
          <S.SectionAboutContent>
            <S.Title>
              Sobre
              <span>
                Nós <img src="assets/imgs/check-icon.svg" alt="icone check" />
              </span>
            </S.Title>
            <S.TextDefault>
              A <S.TextStrong>StarCheck</S.TextStrong> destaca-se pela sua{" "}
              <S.TextStrong>precisão</S.TextStrong>,{" "}
              <S.TextStrong>compromisso</S.TextStrong> com a{" "}
              <S.TextStrong>qualidade</S.TextStrong> e{" "}
              <S.TextStrong>atendimento excepcional</S.TextStrong> ao cliente.
              Valorizamos sua satisfação e nos esforçamos para superar suas
              expectativas. Nossa equipe está pronta para fornecer orientações
              especializadas e garantir que suas necessidades sejam atendidas de
              maneira eficiente.
            </S.TextDefault>
            <S.TextDefault>
              Seja de forma domiciliar ou em nossos pontos fixos, a{" "}
              <S.TextStrong>StarCheck </S.TextStrong>
              está pronta para ser sua parceira em todas as suas necessidades de
              vistorias veicular. Conte conosco para promover a segurança e
              proporcionar tranquilidade.
            </S.TextDefault>

            <Link to={"agendamento"}>
              <ButtonCustom typeOfButton="BlueGradient">
                AGENDAR VISTORIA
              </ButtonCustom>
            </Link>

            <S.SectionCards>
              <S.WrapperCard>
                <S.SubTitle>Missão</S.SubTitle>
                <S.Card>
                  <p>
                    Contribuir para a segurança no mercado de{" "}
                    <S.TextBlue>veículos</S.TextBlue>, realizando vistorias
                    confiáveis ​​e precisas que garantem a tranquilidade para
                    você.
                  </p>
                </S.Card>
              </S.WrapperCard>

              <S.WrapperCard>
                <S.SubTitle>Visão</S.SubTitle>
                <S.Card>
                  <p>
                    Nosso propósito é ser referência em{" "}
                    <S.TextBlue>Vistoria Veicular</S.TextBlue>, destacando-nos
                    por excelência no serviço prestado.
                  </p>
                </S.Card>
              </S.WrapperCard>

              <S.WrapperCard>
                <S.SubTitle>Valores</S.SubTitle>
                <S.Card>
                  <S.Grid $gridTemplate=".2fr 1fr" $gap="16px">
                    <img
                      src="assets/imgs/check-icon.svg"
                      alt="icone de checado"
                    />
                    <h4>HONESTIDADE</h4>

                    <img
                      src="assets/imgs/check-icon.svg"
                      alt="icone de checado"
                    />
                    <h4>COMPROMETIMENTO</h4>

                    <img
                      src="assets/imgs/check-icon.svg"
                      alt="icone de checado"
                    />
                    <h4>RESPEITO</h4>

                    <img
                      src="assets/imgs/check-icon.svg"
                      alt="icone de checado"
                    />
                    <h4>CONFIANÇA</h4>
                  </S.Grid>
                </S.Card>
              </S.WrapperCard>
            </S.SectionCards>
          </S.SectionAboutContent>
        </S.SectionAbout>
        <S.SectionServices id="servicos">
          <S.SectionServicesContent>
            <S.Title>
              Serviços{}{" "}
              <img src="assets/imgs/check-icon.svg" alt="icone de checado" />
            </S.Title>
            <S.TextDefault>
              <S.TextStrong>Compre</S.TextStrong> e{" "}
              <S.TextStrong>agende online</S.TextStrong> sua vistoria conosco e
              tenha certeza da realização do serviço.
            </S.TextDefault>

            <S.TableService>
              <thead>
                <tr>
                  <td colSpan={2}>
                    <h2>
                      <img
                        src="assets/imgs/pin-icon.svg"
                        alt="pin de localização"
                      />
                      Vistoria de Transferência{" "}
                      <S.TextBlue>Posto fixo</S.TextBlue>
                    </h2>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Moto</td>
                  <td>
                    {" "}
                    <h3>
                      R$ 115 <span>**</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>Carro</td>
                  <td>
                    {" "}
                    <h3>
                      R$ 150 <span>**</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>Ônibus/Caminhão e Veículos Grandes</td>
                  <td>
                    {" "}
                    <h3>
                      R$ 190 <span>**</span>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h2>
                      <img
                        src="assets/imgs/mapa-icon.svg"
                        alt="pin de localização"
                      />
                      Vistoria de Transferência{" "}
                      <S.TextBlue>Domicilar</S.TextBlue>
                    </h2>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <h3>
                      R$ 190 <span>**</span>
                    </h3>
                  </td>
                </tr>
              </tfoot>
            </S.TableService>

            {/* <S.SubTitle>Tipo de Veículo</S.SubTitle> */}
            <S.Textplus>
              <S.TextRed>*</S.TextRed>Ônibus <S.TextBlue>-</S.TextBlue>{" "}
              Micro-ônibus <S.TextBlue>-</S.TextBlue> Reboque{" "}
              <S.TextBlue>-</S.TextBlue> Semi-reboque <S.TextBlue>-</S.TextBlue>{" "}
              Caminhão <S.TextBlue>-</S.TextBlue> Caminhão Trator{" "}
              <S.TextBlue>-</S.TextBlue> Trator de Rodas{" "}
              <S.TextBlue>-</S.TextBlue> Trator Misto <S.TextBlue>-</S.TextBlue>{" "}
              Chassi/Plataforma
            </S.Textplus>
            <S.Textplus>
              <S.TextRed>*</S.TextRed>
              <S.TextRed>*</S.TextRed>Taxa será acrescida no valor da compra.
              Taxa bancária no <S.TextStrong>PIX</S.TextStrong> no valor de{" "}
              <S.TextBlue>R$ 1,92</S.TextBlue>. Taxa bancária no{" "}
              <S.TextStrong>Boleto</S.TextStrong> no valor de{" "}
              <S.TextBlue>R$ 3,50</S.TextBlue>.
            </S.Textplus>

            <Link to={"agendamento"}>
              <ButtonCustom typeOfButton="BlueGradient">
                AGENDAR VISTORIA
              </ButtonCustom>
            </Link>
          </S.SectionServicesContent>
        </S.SectionServices>
        <S.SectionLocation id="localizacao">
          <S.SectionLocationContent>
            <S.Title>
              Localização{}{" "}
              <img src="/assets/imgs/check-icon.svg" alt="icone de checado" />
            </S.Title>

            <S.SectionLocationWrapperCardsMap>
              <S.SectionLocationCardMap>
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/R.+Chapadinha,+4,+S%C3%A3o+Lu%C3%ADs+-+MA,+65072-852/@-2.4922137,-44.2593521,15.21z/data=!4m5!3m4!1s0x7f68d8c6eaaf73d:0x2ff22426484a03bc!8m2!3d-2.4915126!4d-44.2535711?entry=ttu"
                >
                  <img src="/assets/imgs/map1.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>

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
                <S.WrapperImgMap
                  target="_blank"
                  href="https://maps.app.goo.gl/MGjZUfehbJMduUvU8"
                >
                  <img src="/assets/imgs/map2.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/Av.+Contorno,+4144+-+Potosi,+Balsas+-+MA,+65800-000/@-7.5148335,-46.0400104,17z/data=!4m6!3m5!1s0x92d5ef72b8053479:0x58ce885f51bb8393!8m2!3d-7.5144506!4d-46.0379397!16s%2Fg%2F11c2151wrp?entry=ttu"
                >
                  <img src="/assets/imgs/map3.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/Departamento+Estadual+de+Tr%C3%A2nsito+-+Ag%C3%AAncia+de+Pinheiro/@-2.5319845,-45.0898621,18.21z/data=!4m6!3m5!1s0x92b34e19f05da7cb:0x93230d9a3f531ba3!8m2!3d-2.5317729!4d-45.0897476!16s%2Fg%2F11b6hrry1p?entry=ttu"
                >
                  <img src="/assets/imgs/map4.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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

              <S.SectionLocationCardMap>
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/Av.+Alexandre+Costa,+3480+-+Volta+Redonda,+Caxias+-+MA,+65605-515/@-4.8784905,-43.3442526,18.21z/data=!4m6!3m5!1s0x78e926f2c1ee513:0x7a4fe4ca5df3da7!8m2!3d-4.8783834!4d-43.3436598!16s%2Fg%2F11tsjtc8r3?entry=ttu"
                >
                  <img src="/assets/imgs/map5.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/R.+Francisco+Bernardino,+1442+-+Cod%C3%B3,+MA,+65400-000/@-4.4692901,-43.8874529,18.21z/data=!4m5!3m4!1s0x78bf118b28a068f:0x3e73c0e7e32d81d2!8m2!3d-4.4693113!4d-43.8868038?entry=ttu"
                >
                  <img src="/assets/imgs/map6.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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
                <S.WrapperImgMap
                  target="_blank"
                  href="https://www.google.com.br/maps/place/7%C2%B021'46.6%22S+46%C2%B037'21.5%22W/@-7.3630442,-46.6229281,19z/data=!4m4!3m3!8m2!3d-7.362956!4d-46.62264?entry=ttu"
                >
                  <img src="/assets/imgs/map7.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
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
            </S.SectionLocationWrapperCardsMap>
          </S.SectionLocationContent>
        </S.SectionLocation>

        <S.SectionContact id="contato">
          <S.SectionContactContent>
            <h1>
              Contatos{" "}
              <img
                src="/assets/imgs/check-dark-blue.svg"
                alt="icone de checado"
              />
            </h1>

            <div>
              <S.TitleLocalization>
                <span>Caxias / MA</span>
              </S.TitleLocalization>
              <S.TitleLocalization>
                <span>São Luis / MA</span>
              </S.TitleLocalization>

              <p>(98) 98562-0425</p>
            </div>

            <div>
              <S.TitleLocalization>
                <span>Codó / MA</span>
              </S.TitleLocalization>
              <S.TitleLocalization>
                <span>Bacabal / MA</span>
              </S.TitleLocalization>

              <p>(99) 99128-2316</p>
            </div>

            <div>
              <S.TitleLocalization>
                <span>Pinheiro /MA</span>
              </S.TitleLocalization>
              <S.TitleLocalization>
                <span>Riachão / MA</span>
              </S.TitleLocalization>
              <S.TitleLocalization>
                <span>Balsas / MA</span>
              </S.TitleLocalization>
              <p>(99) 98535-5900</p>
            </div>
          </S.SectionContactContent>
        </S.SectionContact>
      </S.Container>
    </LayoutTemplate>
  );
};
