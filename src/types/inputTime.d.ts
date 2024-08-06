declare module "react-times" {
  import * as React from "react";

  export interface ITimePickerProps {
    placeholder?: string;
    time?: string;
    label?: string;
    required?: boolean;
    timeFormat?: string;
    timeFormatter?: (params: {
      hour: string;
      minute: string;
      meridiem: string;
    }) => string;
    focused?: boolean;
    withoutIcon?: boolean;
    theme?: "material" | "classic";
    colorPalette?: "light" | "dark";
    timeMode?: "12" | "24" | number;
    meridiem?: "AM" | "PM";
    showTimezone?: boolean;
    timezone?: string;
    trigger?: React.ReactNode;
    closeOnOutsideClick?: boolean;
    disabled?: boolean;
    draggable?: boolean;
    language?: "en" | "zh-cn" | "zh-tw" | "fr" | "ja";
    phrases?: {
      confirm?: string;
      cancel?: string;
      close?: string;
      am?: string;
      pm?: string;
    };
    minuteStep?: number;
    timeConfig?: {
      from?: string | number;
      to?: string | number;
      step?: number;
      unit?: "hour" | "minute";
    };
    limitDrag?: boolean;
    onFocusChange?: (focused: boolean) => void;
    onTimeChange?: (options: {
      hour: string;
      minute: string;
      meridiem: string;
    }) => void;
    onTimezoneChange?: (timezone: {
      city: string;
      zoneAbbr: string;
      zoneName: string;
    }) => void;
  }

  class TimePicker extends React.Component<TimePickerProps, any> {}

  export default TimePicker;
}
