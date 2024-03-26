import styled, { css } from "styled-components";

export const Container = styled.div<{ status: string }>`
  ${({ status }) => css`
    > p {
      font-family: Mulish;
      font-size: 12px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;
      letter-spacing: 0.36px;
      text-transform: uppercase;
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
        /* color: #4881ef; */
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
