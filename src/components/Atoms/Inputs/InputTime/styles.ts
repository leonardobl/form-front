import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    position: absolute;
    display: block;
    z-index: 1;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .time_picker_container {
    /* border-radius: 10px;
    border: 1px solid var(--PADRAO-2, #9d9d9d);
    background: var(--W, #fff); */
    box-shadow: none;
  }

  .react_times_button {
    /* border-radius: 10px;
    border: 1px solid var(--PADRAO-2, #9d9d9d);
    background: var(--W, #fff); */
    box-shadow: none;
  }

  .preview_container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .time_picker_preview {
    border-radius: 10px;
    border: 1px solid var(--PADRAO-2, #9d9d9d);
    background: var(--W, #fff);
    box-shadow: none;
    padding: 0;
  }

  .wrapper {
    box-shadow: none;
  }

  .modal_container {
    top: 32px;
    box-shadow: none;
    transition: none;
  }

  .classic_time:hover,
  .classic_time.active:hover {
    background-color: ${(props) =>
      lighten(0.1, `${props.theme.colors.main}`)} !important;
  }

  .classic_time.active {
    background-color: transparent !important;
    color: inherit !important;
  }
`;
