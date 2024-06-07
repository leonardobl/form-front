import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useInspections = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  const [filterOpen, setFilterOpen] = useState(isMobile ? false : true);
  const navigate = useNavigate();

  return { isMobile, filterOpen, setFilterOpen, navigate };
};
