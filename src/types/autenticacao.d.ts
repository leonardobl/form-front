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
  exp: number;
}
