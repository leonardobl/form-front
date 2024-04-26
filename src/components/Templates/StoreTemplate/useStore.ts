import React from "react";

import { useSearchParams } from "react-router-dom";

export const useStore = () => {
  const [searchParams] = useSearchParams();
  const reagendamento = !!(searchParams.get("reagendamento") === "true");

  return {
    reagendamento,
  };
};
