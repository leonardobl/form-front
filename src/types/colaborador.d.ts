import { SexoEnum } from "../enums/sexo";
import { TipoColaboradorEnum } from "../enums/tipoColaborador";
<<<<<<< HEAD
=======
import { IDeliveryDTO } from "./delivery";
>>>>>>> 8ef3b82af7bfd397c7ce34957e44fc5d2dd08075

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

export interface IlistarPorDeliveryProps {
  uuidDelivery: string;
  tipo?: TipoColaboradorEnum;
}

export interface IlistarPorLojaProps {
  uuidLoja: string;
  tipo?: TipoColaboradorEnum;
  disponivel?: boolean;
}
<<<<<<< HEAD
=======

export interface IColaboradorCompletoDTO {
  cpf: string;
  dataNascimento: string;
  delivery: IDeliveryDTO;
  loja: IDeliveryDTO;
  nome: string;
  sexo: string;
  tipo: string;
  uuid: string;
  uuidUsuario: string;
}
>>>>>>> 8ef3b82af7bfd397c7ce34957e44fc5d2dd08075
