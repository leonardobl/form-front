import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useSettings = () => {
  const navigate = useNavigate();

  const getConcessionarias = useCallback(() => {}, []);

  useEffect(() => {
    getConcessionarias();
  }, []);

  return { navigate };
};
