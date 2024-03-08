import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useLoginRegister = () => {
  const params = useParams();
  const navigate = useNavigate();

  function handleLogin() {
    if (params?.uuidAgendamento) {
      navigate(`/agendamento/${params.uuidAgendamento}/login`);
      return;
    }
    navigate(`/agendamento/login`);
  }

  function handleRegister() {
    if (params?.uuidAgendamento) {
      navigate(`/agendamento/${params.uuidAgendamento}/cadastro-usuario`);
      return;
    }
    navigate(`/agendamento/cadastro-usuario`);
  }

  return { handleLogin, handleRegister };
};
