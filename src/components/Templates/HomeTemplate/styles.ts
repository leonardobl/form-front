import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css``}
`;

export const SectioStarCheckContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    display: flex;
    height: 100%;
  `}

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0 24px;
  }
`;

export const SectioStarCheck = styled.div`
  ${({ theme: { space } }) => css`
    background: #eee;
    height: 720px;
    padding-top: 90px;

    @media (max-width: 500px) {
      background-color: #fff;
      padding-top: 32px;
    }
  `}
`;

export const SectioStarCheckLeftSide = styled.div`
  ${({ theme: { space } }) => css`
    flex: 1;
    display: flex;
    align-items: center;
  `}
`;

export const Title = styled.h2`
  color: #111;
  font-family: "Poppins";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  margin-bottom: 24px;

  span {
    display: block;
  }

  @media (max-width: 500px) {
    font-size: 36px;
    line-height: 1;
    margin-bottom: 24px;

    img {
      width: 23px;
    }
  }
`;

export const SubTitle = styled.h3`
  color: #111;
  text-align: center;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

export const Textplus = styled.p`
  color: #2d2d2d;
  text-align: center;
  font-family: "Roboto";
  font-size: 1.22rem;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 24px;
  margin-bottom: 48px;

  span {
    margin-right: 5px;
  }
`;

export const SectioStarCheckLeftSideWrapper = styled.div`
  ${({ theme: { space } }) => css`
    max-width: 70%;

    @media (max-width: 500px) {
      max-width: 100%;

      > p {
        font-size: 16px !important;
        line-height: 20px !important;
      }

      button {
        margin: 36px auto 40px;
      }
    }

    > p {
      color: #2d2d2d;
      font-family: "Roboto";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 20px;
    }
  `}
`;

export const SectioStarCheckRightSide = styled.div`
  ${({ theme: { space } }) => css`
    flex: 1;
  `}
`;

export const SectioStarCheckRightSideWrapper = styled.div`
  ${({ theme: { space } }) => css`
    position: relative;
    width: 550px;
    height: 720px;

    img {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
    }

    &::before {
      content: "";
      top: -30px;
      right: -30px;
      display: block;
      width: 477px;
      height: 314px;
      position: absolute;
      border-radius: 5px;
      background: #00186d;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    &::after {
      content: "";
      border-radius: 5px;
      display: block;
      position: absolute;
      bottom: -20px;
      left: -30px;
      background: #266bf0;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 477px;
      height: 314px;
    }

    @media (max-width: 500px) {
      width: 280px;
      height: 360px;

      margin: 80px auto;

      &::before {
        width: 211.741px;
        height: 139.2px;
      }

      &::after {
        width: 211.741px;
        height: 139.2px;
      }
    }
  `}
`;

export const SectionAbout = styled.div`
  padding: 120px 0;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const SectionAboutContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;

    button {
      display: block;
      margin: 70px auto;
    }
  `}
`;

export const TextBlue = styled.span`
  color: #266bf0;
  font-weight: 700;
`;

export const TextDefault = styled.p`
  margin-bottom: 24px;
  color: #2d2d2d;
  font-family: "Roboto";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const TextStrong = styled.span`
  font-weight: 700;
`;

export const SectionCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperCard = styled.div`
  width: max-content;

  h3 {
    color: #111;
    text-align: center;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 40px;
  }

  h4 {
    color: #eee;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 32px;
  }
`;

export const Grid = styled.div<{ $gridTemplate: string; $gap?: string }>`
  ${({ $gridTemplate, $gap }) => css`
    display: grid;
    grid-template-columns: ${$gridTemplate};
    gap: ${$gap};

    img {
      display: block;
      width: 20px;
      margin-top: 6px;
    }
  `}
`;

export const Flex = styled.div<{
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
}>`
  ${({ alignItems, justifyContent, gap }) => css`
    display: flex;
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    gap: ${gap};
  `}
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 360px;
  padding: 0 18px;
  border-radius: 5px;
  background: linear-gradient(
    217deg,
    #00186d -10.67%,
    #002ed1 -10.66%,
    #00114d 78.45%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`;

export const SectionServices = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.large};
    background-color: #eee;
    padding: 80px 0;

    @media (max-width: 500px) {
      margin-top: 100px;
    }
  `}
`;

export const SectionServicesContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    text-align: center;

    button {
      margin: 0 auto;
    }

    @media (max-width: 500px) {
      padding: 0 24px;

      > p {
        display: none;
      }
    }
  `}
`;

export const TableService = styled.table`
  thead {
    background: #00114d;
  }

  tbody tr:nth-child(3) {
    background: #00114d;
  }

  width: 1005px;
  margin: 60px auto;
  height: 590px;
  border-collapse: collapse;

  border-radius: 5px;
  background: linear-gradient(
    221deg,
    #00186d -7.87%,
    #002ed1 -7.85%,
    #00114d 109.87%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  td {
    h3 {
      color: #eee;
      text-align: center;
      font-family: "Lato";
      font-size: 48px;
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
      font-style: normal;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 1.44px;

      span {
        color: #ed0000;
      }
    }
  }

  tr {
    text-align: center;
    height: 98px;
  }

  tbody td:nth-child(1) + td {
    width: 50%;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }

  tbody td:nth-child(1) {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;

    color: #eee;
    text-align: center;
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  @media (max-width: 500px) {
    width: 100%;

    td > p {
      font-size: 16px;
      max-width: 110px;
      text-align: left;
      margin: 0 auto;
    }

    td > h3 {
      font-size: 28px;
      gap: 6px;
    }
  }
`;

export const TableWrapperTitle = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const TitleTable = styled.h2`
  color: #eee;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;

  @media (max-width: 500px) {
    font-size: 18px;
    max-width: 320px;
    line-height: 1.6;
    text-align: start;
    white-space: nowrap;

    span {
      display: block;
    }
  }
`;

export const SectionLocation = styled.div`
  ${({ theme: { space } }) => css`
    padding: 120px 0;

    @media (max-width: 500px) {
      padding: 50px 0;
    }
  `}
`;

export const SectionLocationContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    text-align: center;

    padding: 0 24px;
  `}
`;

export const SectionLocationWrapperCardsMap = styled.div`
  padding: 80px 0;
  display: flex;
  gap: 70px;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;
`;

export const TitleLocalization = styled.h2`
  display: flex;
  color: #111;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;

  span {
    text-align: left;
  }
`;
export const SectionLocationCardMap = styled.div`
  h2 {
    justify-content: center;
  }

  p {
    color: #2d2d2d;
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    margin-top: 24px;
  }
`;

export const WrapperImgMap = styled.a`
  position: relative;
  display: block;
  cursor: pointer;
  margin-bottom: 60px;

  &::before {
    content: "";
    top: -18px;
    right: -20px;
    position: absolute;
    display: block;
    width: 257.37px;
    height: 165.42px;
    border-radius: 5px;
    background: #00186d;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: "";
    bottom: -10px;
    left: -20px;
    position: absolute;
    display: block;
    width: 257.37px;
    height: 165.42px;
    border-radius: 5px;
    background: #266bf0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 320px;
    position: relative;
    z-index: 1;
  }
`;

export const SectionContact = styled.section`
  padding: 150px 0;
  background: #266bf0;
  min-height: 216px;

  @media (max-width: 500px) {
    padding: 50px 0;
  }
`;

export const SectionContactContent = styled.div`
  ${({ theme: { space } }) => css`
    max-width: ${space.medio};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    h1 {
      color: #efefef;
      font-family: "Poppins";
      font-size: 72px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;

      align-self: center;
    }

    div {
      align-self: self-end;
      p {
        color: #eee;
        font-family: "Poppins";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
        margin-top: 10px;
      }
    }
  `}

  @media (max-width: 500px) {
    padding: 0 24px;

    display: flex;
    justify-content: center;

    > div {
      width: 210px;
    }

    > div + div {
      margin-top: 16px;
    }

    h1 {
      font-size: 36px;
      text-align: center;
      width: 100%;
      margin-bottom: 36px;

      img {
        width: 26px;
      }
    }
  }
`;

export const TextRed = styled.span`
  color: #ed0000;
`;
