import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutTemplate } from "../LayoutTemplate";

export const SchedulingContainerTemplate = () => {
  return (
    <LayoutTemplate>
      <Outlet />
    </LayoutTemplate>
  );
};
