import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useContextSite } from "../../../context/Context";
import { IPagination } from "../../../types/pagination";
import { useNavigate } from "react-router-dom";

const VALUES = [
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
  ["SAÕ LUÍS", "XXXXXXXXXXXXXXXXX", "21/06/2024", "000"],
];

export const useItinerant = () => {
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const { setIsLoad } = useContextSite();

  return {
    isMobile,
    isOpen,
    setIsOpen,
    VALUES,
    pagination,
    setNumberPage,
    navigate,
  };
};
