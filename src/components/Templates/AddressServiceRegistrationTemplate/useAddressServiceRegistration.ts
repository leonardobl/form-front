import React from "react";
import { maskPhone } from "../../../utils/masks";
import { useNavigate } from "react-router-dom";

export const useAddressServiceRegistration = () => {
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    navigate(`/agendamento/${"dsfsdf"}/pagamento`);
  }

  return {
    maskPhone,
    handleSubmit,
  };
};
