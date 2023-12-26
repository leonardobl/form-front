declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VIACEP_URL: string;
      REACT_APP_IBGE_API_URL: string;
      REACT_APP_USUARIOS_API_URL: string;
      REACT_APP_AGENDAMENTO_API_URL: string;
    }
  }
}

export {};
