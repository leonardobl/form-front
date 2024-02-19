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

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  // setIsLoad: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoad,
        setIsLoad,
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
