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

import { TOKYO } from "../Global/TokyoTheme";
import { STARCHECK } from "../Global/StarCheckTheme";
import { LOG_VISTORIAS } from "../Global/LogTheme";
import { VLX_VISTORIAS } from "../Global/VlxTheme";

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  project: ProjetosEnum;
  setProject(e: ProjetosEnum): void;
  // setIsLoad: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const Themes = {
  TOKYO: TOKYO,
  STARCHECK: STARCHECK,
  LOG_VISTORIAS: LOG_VISTORIAS,
  VLX_VISTORIAS: VLX_VISTORIAS,
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const [project, setProject] = useState(ProjetosEnum.STARCHECK);

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
