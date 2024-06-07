import React from "react";
import { useSearchParams } from "react-router-dom";

export const useAcceptInspection = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return {};
};
