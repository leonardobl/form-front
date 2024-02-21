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
import { RolesEnum } from "../enums/roles";

interface IAtendimentoProps {
  tipoAtendimento?: TipoAtendimentoEnum;
  reAgendamento?: boolean;
  uuidAgendamento?: string;
  cidade?: string;
  roles?: RolesEnum[];
  uuidCliente?: string;
  uuidUsuario?: string;
}

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  agendamentoContext: IAtendimentoProps;
  setAgendamentoContext: (t: IAtendimentoProps) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const [agendamentoContext, setAgendamentoContext] =
    useState<IAtendimentoProps>({} as IAtendimentoProps);

  return (
    <Context.Provider
      value={{
        isLoad,
        setIsLoad,
        agendamentoContext,
        setAgendamentoContext,
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
