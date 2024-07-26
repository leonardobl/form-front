import { useState } from "react";

export const useHolidays = () => {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
};
