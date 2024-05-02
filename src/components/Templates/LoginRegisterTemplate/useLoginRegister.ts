import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useLoginRegister = () => {
  const { uuidAgendamento } = useParams();
  const navigate = useNavigate();

  function handleLogin() {
    if (uuidAgendamento) {
      navigate(`/agendamento/${uuidAgendamento}/login`);
      return;
    }
    navigate(`/agendamento/login`);
  }

  function handleRegister() {
    if (uuidAgendamento) {
      navigate(`/agendamento/${uuidAgendamento}/cadastro-usuario`);
      return;
    }
    navigate(`/agendamento/cadastro-usuario`);
  }

  return { handleLogin, handleRegister };
};
