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
                  especializada em fornecer análises precisas e fornecidas do
                  seu veículo, garantindo segurança e complementos.
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
              expectativas em cada interação. Nossa equipe está pronta para
              responder às suas perguntas, fornecer orientações especializadas e
              garantir que suas necessidades sejam atendidas de maneira
              eficiente.
            </S.TextDefault>
            <S.TextDefault>
              Seja para uma{" "}
              <S.TextBlue>
                vistoria em sua residência, endereço comercial (móvel)
              </S.TextBlue>{" "}
              ou <S.TextBlue>direto em nossos postos (fixos)</S.TextBlue>, a{" "}
              <S.TextStrong>StarCheck</S.TextStrong> está pronta para ser sua
              parceira confiável em todas as suas necessidades de vistorias.
              Conte conosco para, promover a segurança e proporcionar
              tranquilidade.
            </S.TextDefault>
            <S.TextDefault>
              <S.TextStrong>Agende uma vistoria</S.TextStrong> conosco hoje
              mesmo e experimente o profissionalismo e a excelência que trouxe a{" "}
              <S.TextStrong>StarCheck </S.TextStrong>a melhor do Maranhão.
              Estamos ansiosos para trabalhar com você e oferecer soluções em
              vistorias.
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
                    <S.TextBlue>veículos usados </S.TextBlue>
                    ​​e <S.TextBlue>seminovos</S.TextBlue>, realizando revisões
                    confiáveis ​​e precisas que garantem a tranquilidade de
                    nossos clientes.
                  </p>
                </S.Card>
              </S.WrapperCard>

              <S.WrapperCard>
                <S.SubTitle>Visão</S.SubTitle>
                <S.Card>
                  <p>
                    Nosso propósito é ser a principal referência em{" "}
                    <S.TextBlue>Vistoria Veicular</S.TextBlue>, destacando-nos
                    pela excelência no serviço prestado e pela dedicação em
                    atender às necessidades de nossos clientes.
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
                    <h4>INTEGRIDADE</h4>

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
                      R$ 115 <span>+</span> <p> taxas</p>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>Carro</td>
                  <td>
                    {" "}
                    <h3>
                      R$ 150 <span>+</span> <p> taxas</p>
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td>Ônibus/Caminhão e Veículos Grandes</td>
                  <td>
                    {" "}
                    <h3>
                      R$ 190 <span>+</span> <p> taxas</p>
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
                      R$ 190 <span>+</span> <p> taxas</p>
                    </h3>
                  </td>
                </tr>
              </tfoot>
            </S.TableService>

            <S.SubTitle>Tipo de Veículo</S.SubTitle>
            <S.Textplus>
              Micro-ônibus - Ônibus - Reboque - Semirreboque - Caminhão -
              Caminhão Trator - Trator de Rodas - Trator Misto -
              Chassi/Plataforma
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
                  href="https://www.google.com.br/maps/place//@-2.4919149,-44.2529526,19z/data=!4m3!1m2!2m1!1s65072-852+numero+4?entry=ttu"
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
                  href="https://maps.app.goo.gl/ZmpgQHNkvTemgHi47"
                >
                  <img src="/assets/imgs/map3.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
                <S.TitleLocalization>
                  <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                  <span>
                    XXXXX
                    <br /> Balsas / MA
                  </span>
                </S.TitleLocalization>
                <p>
                  Rua XXXXXX
                  <br /> <S.TextStrong>CEP 658000-000</S.TextStrong>
                </p>
              </S.SectionLocationCardMap>

              <S.SectionLocationCardMap>
                <S.WrapperImgMap
                  target="_blank"
                  href="https://maps.app.goo.gl/ZmpgQHNkvTemgHi47"
                >
                  <img src="/assets/imgs/map4.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
                <S.TitleLocalization>
                  <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                  <span>
                    XXXXX
                    <br /> Balsas / MA
                  </span>
                </S.TitleLocalization>
                <p>
                  Rua XXXXXX
                  <br /> <S.TextStrong>CEP 658000-000</S.TextStrong>
                </p>
              </S.SectionLocationCardMap>

              <S.SectionLocationCardMap>
                <S.WrapperImgMap
                  target="_blank"
                  href="https://maps.app.goo.gl/ZmpgQHNkvTemgHi47"
                >
                  <img src="/assets/imgs/map5.svg" alt="mapa de sao luiz" />
                </S.WrapperImgMap>
                <S.TitleLocalization>
                  <img src="/assets/imgs/pin-blue-icon.svg" alt="pin do mapa" />
                  <span>
                    XXXXX
                    <br /> Balsas / MA
                  </span>
                </S.TitleLocalization>
                <p>
                  Rua XXXXXX
                  <br /> <S.TextStrong>CEP 658000-000</S.TextStrong>
                </p>
              </S.SectionLocationCardMap>
            </S.SectionLocationWrapperCardsMap>
          </S.SectionLocationContent>
        </S.SectionLocation>

        <S.SectionContact id="contato">
          <S.SectionContactContent>
            <h1>Contatos</h1>

            <div>
              <S.TitleLocalization>
                <span>
                  Calhau
                  <br /> São Luis / MA
                </span>
              </S.TitleLocalization>

              <p>(98) 98562-0425</p>
            </div>

            <div>
              <S.TitleLocalization>
                <span>
                  Centro
                  <br /> Bacabal / MA
                </span>
              </S.TitleLocalization>
              <p>(99) 99128-2316</p>
            </div>

            <div>
              <S.TitleLocalization>
                <span>
                  XXXXX
                  <br /> Balsas / MA
                </span>
              </S.TitleLocalization>
              <p>(XX) XXXX-XXXX</p>
            </div>
          </S.SectionContactContent>
        </S.SectionContact>
      </S.Container>
    </LayoutTemplate>
  );
};
