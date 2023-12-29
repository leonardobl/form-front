import styled, { css } from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: 1.6rem;
  margin: 0 auto;
  padding: 0.8rem 0;
  align-items: center;

  width: max-content;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  span,
  button {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);

    -webkit-touch-callout: none;

    -webkit-user-select: none;

    -khtml-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }

  span {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.88);

    transition: color 0.2s;

    :hover {
      color: rgba(0, 0, 0, 0.56);
    }
  }

  span + span {
    margin-left: 20px;
  }

  .disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;

  .actived {
    color: #266bf0;
    border: 1px solid #cacaca;
    width: max-content;
    /* border-radius: 0; */
    /* justify-content: center; */
  }

  button {
    padding: 0.2rem 0.8rem;

    border: none;

    /* border-radius: 0.4rem; */

    font-weight: 600;

    /* line-height: 1rem; */

    font-size: 1rem;

    background: transparent;
    color: #000;

    transition: background-color 0.15s;

    :not(.actived):hover {
      background-color: #ebebeb;
    }
  }
`;
