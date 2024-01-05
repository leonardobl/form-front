export interface IFaturaDTO {
  boleto: IBoleto;
  dataAutorizacao: Date;
  dataCancelamento: Date;
  dataDevolucao: Date;
  dataEstorno: Date;
  dataExpiracao: Date;
  dataProtesto: Date;
  idReferencia: string;
  pix: IPix;
  status: string;
  url: string;
  uuid: string;
  valorTotal: number;
  vencimento: string;
}

export interface IBoleto {
  barCode: string;
  barCodeData: string;
  digitableLine: string;
}

export interface IPix {
  qrcode: string;
  qrcodeText: string;
}
