import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { IAuth } from "./types";
import { Loading } from "../components/Atoms/Loading";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { ProjetosEnum } from "../enums/projetosEnum";

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  project: ProjetosEnum;
  setProject: Dispatch<SetStateAction<ProjetosEnum>>;
  // setIsLoad: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const [project, setProject] = useState<ProjetosEnum>(ProjetosEnum.STARCHECK);

  return (
    <Context.Provider
      value={{
        isLoad,
        setIsLoad,
        project,
        setProject,
      }}
    >
      {children}
      {isLoad && <Loading />}
    </Context.Provider>
  );
}

export function useContextSite() {
  const contextSite = useContext(Context);
  return contextSite;
}
