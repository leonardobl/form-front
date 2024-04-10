import { SexoEnum } from "../enums/sexo";
import { TipoColaboradorEnum } from "../enums/tipoColaborador";

export interface IColaboradorDTO {
  cpf: string;
  dataNascimento: string;
  nome: string;
  sexo: SexoEnum;
  tipo: TipoColaboradorEnum;
  uuid: string;
  uuidUsuario: string;
}

export interface IColaboradorForm {
  cpf: string;
  dataNascimento?: string;
  nome: string;
  sexo?: SexoEnum;
  tipo: TipoColaboradorEnum;
  uuidDelivery?: string;
  uuidLoja?: string;
  uuidUsuario?: string;
}

export interface IListarAgendamentosProps {
  uuidColaborador: string;
  data: string;
}
