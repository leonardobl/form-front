import { TipoClienteEnum } from "../enums/tipoCliente";
import { IEnderecoDTO } from "./agendamento";

export interface IClienteForm {
  cpfCnpj: string;
  email: string;
  endereco?: IEnderecoDTO;
  nome: string;
  senha?: string;
  telefone?: string;
  tipo: TipoClienteEnum;
}
