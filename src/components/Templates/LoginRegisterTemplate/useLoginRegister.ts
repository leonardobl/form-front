import React from "react";
import { useParams } from "react-router-dom";

export const useLoginRegister = () => {
  const params = useParams();

  return { params };
};
