import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePixConfirmation = () => {
  const navigate = useNavigate();
  const params = useParams();

  return { navigate, params };
};
