declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_VIACEP_URL: string;
      REACT_APP_IBGE_API_URL: string;
      REACT_APP_USUARIOS_API_URL: string;
      REACT_APP_BRAVE_API_URL: string;
      REACT_APP_BRAVE_CNPJ_ECV: string;
      REACT_APP_PROJECT: string;
    }
  }
}

export {};
