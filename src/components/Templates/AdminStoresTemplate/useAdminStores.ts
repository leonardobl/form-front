import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export const useAdminStores = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });

  return { isMobile, navigate };
};
