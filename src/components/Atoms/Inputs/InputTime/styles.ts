import { lighten } from "polished";
import { ITimePickerProps } from "react-times";
import styled from "styled-components";

export const Container = styled.div<ITimePickerProps>`
  position: relative;

  p#label {
    position: absolute;
    left: 22px;
    top: 0px;
    background: linear-gradient(to top, #fff 50%, transparent 50%);
    transform: translateY(-50%);
    z-index: 1;
    padding: 2px 5px;
    color: #9d9d9d;
    font-family: Mulish;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

    > span {
      color: red;
    }
  }

  span#placeholder {
    color: #9d9d9d;
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
  }

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
    opacity: ${(props) => (props.time ? "1" : "0")};
  }

  .time_picker_preview {
    border-radius: 10px;
    border: 1px solid var(--PADRAO-2, #9d9d9d);
    background: var(--W, #fff);
    box-shadow: none;
    padding: 0;
    height: 46px;
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
