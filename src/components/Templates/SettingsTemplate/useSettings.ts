import React from "react";
import { useNavigate } from "react-router-dom";

export const useSettings = () => {
  const navigate = useNavigate();

  return { navigate };
};
