declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VIACEP_URL: string;
      REACT_APP_IBGE_API_URL: string;
    }
  }
}

export {};
