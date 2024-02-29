import styled, { css } from "styled-components";

export const Container = styled.div<{ status: string }>`
  ${({ status }) => css`
    border-radius: 25px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 10px;
    width: fit-content;

    > p {
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
    }

    > button {
      color: #eee;
      font-family: Mulish;
      font-size: 8px;
      font-style: normal;
      font-weight: 800;
      line-height: 20px;
      letter-spacing: 0.24px;

      display: flex;
      width: 40px;
      padding: 1px 8px;
      justify-content: center;
      align-items: center;

      border-radius: 5px;
      background: #266bf0;
      box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    }

    ${status === "AGUARDANDO_PAGAMENTO" &&
    css`
      > p {
        color: #d0c808;
      }
    `}

    ${status === "AGENDADO" &&
    css`
      > p {
        color: #558fff;
      }
    `}


    ${status === "INICIADO" &&
    css`
      > p {
        color: #0025a8;
      }
    `}



    ${status === "FINALIZADO" &&
    css`
      b > p {
        color: #26be51;
      }
    `}


     ${status === "ABERTO" &&
    css`
      > p {
        color: #31cbec;
      }
    `}



    ${status === "CANCELADO" &&
    css`
      > p {
        color: #e42e30;
      }
    `}

    ${status === "REEMBOLSADO" &&
    css`
      > p {
        color: #ee6f27;
      }
    `}
  `}
`;
