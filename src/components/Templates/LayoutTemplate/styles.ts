import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    /* max-width: ${space.large}; */
    margin: 0 auto;
  `}
`;

export const header = styled.header`
  height: 144px;
  background-color: #266bf0;

  @media (max-width: 500px) {
    padding: 0 24px;
  }
`;

export const HeaderContent = styled.div`
  ${({ theme: { space } }) => css`
    @media (max-width: 500px) {
      gap: 0 16px;
    }

    max-width: ${space.medio};
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &[data-hidden="true"] {
      justify-content: center;
    }
  `}
`;

export const Logo = styled.img`
  @media (max-width: 500px) {
    width: 105px;
  }
`;

export const MenuMobile = styled.img`
  @media (max-width: 500px) {
    display: block;
  }

  display: none;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;

  a {
    color: #eee;
    text-align: center;
    font-family: "Poppins";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  &[data-hidden="true"] {
    display: none;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ButtonMySchedule = styled.button`
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);

  display: inline-flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 44px;
  background: linear-gradient(180deg, #0025a8 0%, #00114d 100%);

  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const WrapperButtons = styled.div`
  &[data-hidden="true"] {
    display: none;
  }

  @media (max-width: 500px) {
    /* gap: 0 20px;
    flex: 1;
    justify-content: space-around; */
    display: none;
  }

  display: flex;
  align-items: center;
  gap: 0 48px;
`;

export const ButtonLogin = styled.button`
  background: linear-gradient(181deg, #fff -28.23%, #cacaca 99.08%);
  color: #00186d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  min-width: 150px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-family: "Poppins";
`;
