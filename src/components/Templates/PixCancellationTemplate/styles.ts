import styled from "styled-components";

export const Container = styled.div`
  padding: ${(props) => props.theme.padding.primary} 20px;

  > h1 {
    text-align: center;
  }

  > h4 {
    color: #2d2d2d;
    text-align: center;
    font-family: Mulish;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 133.333% */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
    margin-bottom: 54px;

    span {
      font-weight: 800;
    }
  }

  > button {
    width: 206px;
    padding: 10px 41px;
    margin: 0 auto 50px;
  }

  @media (max-width: 500px) {
    padding: ${(props) => props.theme.padding.mobile} 0;
  }
`;

export const Info = styled.div`
  background-color: #e8e8e8;
  padding: 12px 16px;
  width: 100%;
  max-width: 714px;
  margin: 0 auto;

  > p {
    color: #7c848b;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */

    span {
      font-weight: 700;
    }
  }
`;
