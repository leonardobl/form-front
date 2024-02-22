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
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";
import { RolesEnum } from "../enums/roles";
import { OpcoesServicosEnum } from "../enums/opcoesServicos";

export interface IAtendimentoContextProps {
  tipoAtendimento: TipoAtendimentoEnum;
  revistoria: boolean;
  cidade: string;
  roles: RolesEnum[];
  uuidAgendamento: string;
  uuidCliente: string;
  uuidUsuario: string;
  uuidVeiculo: string;
  servico: OpcoesServicosEnum;
}

const DefaultValues: IAtendimentoContextProps = {
  cidade: "",
  revistoria: false,
  roles: [],
  servico: null,
  tipoAtendimento: null,
  uuidAgendamento: "",
  uuidCliente: "",
  uuidUsuario: "",
  uuidVeiculo: "",
};

type ContextSite = {
  isLoad: boolean;
  setIsLoad: Dispatch<SetStateAction<boolean>>;
  agendamentoContext: IAtendimentoContextProps;
  setAgendamentoContext: (t: IAtendimentoContextProps) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextSite);

export function ContextProvider({ children }: Props) {
  const [isLoad, setIsLoad] = useState(false);
  const [agendamentoContext, setAgendamentoContext] =
    useState<IAtendimentoContextProps>(DefaultValues);

  useEffect(() => {
    console.log(agendamentoContext);
  }, [agendamentoContext]);

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
