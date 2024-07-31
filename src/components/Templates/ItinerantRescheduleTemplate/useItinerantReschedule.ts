import dayjs from "dayjs";
import { SyntheticEvent, useState } from "react";
import { Itinerante } from "../../../services/Itinerante";

export const useItinerantReschedule = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  function handleModal(e: SyntheticEvent) {
    e.preventDefault();
    setIsOpen(true);
  }

  function handleSubmit() {
    console.log(dayjs(date).format("YYYY-MM-DD"));
    setIsOpen(false);
  }

  return { isOpen, setIsOpen, date, setDate, handleSubmit, handleModal };
};
