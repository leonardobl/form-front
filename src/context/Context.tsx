import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Loading } from "../components/Atoms/Loading";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";

interface IAtendimentoProps {
  tipoAtendimento: TipoAtendimentoEnum;
  reAgendamento: boolean;
}

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  tipoAtendimento: IAtendimentoProps;
  setTipoAtendimento: (t: IAtendimentoProps) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const [tipoAtendimento, setTipoAtendimento] = useState<IAtendimentoProps>(
    {} as IAtendimentoProps
  );

  return (
    <Context.Provider
      value={{
        isLoad,
        setIsLoad,
        tipoAtendimento,
        setTipoAtendimento,
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
