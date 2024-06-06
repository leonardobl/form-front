import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useInspections = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [filterOpen, setFilterOpen] = useState(isMobile ? false : true);

  return { isMobile, filterOpen, setFilterOpen };
};
