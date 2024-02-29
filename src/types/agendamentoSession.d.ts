import { OpcoesServicosEnum } from "../enums/opcoesServicos";
import { RolesEnum } from "../enums/roles";
import { TipoAtendimentoEnum } from "../enums/tipoAtendimento";

export interface IAgendamentoSessionProps {
  tipoAtendimento?: TipoAtendimentoEnum;
  revistoria?: boolean;
  reagendamento?: boolean;
  cidade?: string;
  roles?: RolesEnum[];
  uuidAgendamento?: string;
  uuidCliente?: string;
  uuidUsuario?: string;
  uuidVeiculo?: string;
  servico?: OpcoesServicosEnum;
}
