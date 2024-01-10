import { TipoPessoaEnum } from "../enums/pessoas";

interface IUsuarioForm {
  cpfCnpj?: string;
  email: string;
  nome: string;
  senha: string;
  telefone?: string;
  tipoPessoa?: TipoPessoaEnum;
}

export interface IUsuarioDTO {
  authorities: IPerfil[];
  cpfCnpj: string;
  email: string;
  nome: string;
  telefone: string;
  tipoPessoa: TipoPessoaEnum;
  uuid: string;
}

export interface IPerfil {
  ativo: boolean;
  authority?: string;
  createdAt: string;
  id: number;
  nome: string;
  rescursos?: IPerfil[];
  updateReason: string;
  updatedAt: string;
  userNameUpdate: string;
  uuid: string;
  uuidUserUpdate: string;
  version: number;
}
