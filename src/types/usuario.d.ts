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
  authorities: IGrantedAuthority[];
  cpfCnpj: string;
  email: string;
  nome: string;
  telefone: string;
  tipoPessoa: TipoPessoaEnum;
  uuid: string;
}

export interface IGrantedAuthority {
  authority: string;
}
