import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutTemplate } from "../LayoutTemplate";

export const PageLayoutTemplate = () => {
  return (
    <LayoutTemplate>
      <Outlet />
    </LayoutTemplate>
  );
};
