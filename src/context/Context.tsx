import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { Loading } from "../components/Atoms/Loading";

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
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
