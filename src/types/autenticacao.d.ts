import { RolesEnum } from "../enums/roles";

interface IAutenticacaoForm {
  cpfCNPJ: string;
  senha: string;
}

export interface IDecodedToken {
  iss: string;
  sub: string;
  uuid: string;
  nome: string;
  type: string;
  perfis: RolesEnum[];
  exp: number;
}
