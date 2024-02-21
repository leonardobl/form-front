export interface IFaturaDTO {
  boleto: IBoleto;
  dataAutorizacao: Date;
  dataCancelamento: Date;
  dataDevolucao: Date;
  dataEstorno: Date;
  dataExpiracao: Date;
  dataProtesto: Date;
  idReferencia: string;
  pix: IPixDTO;
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

export interface IPixDTO {
  qrcode: string;
  qrcodeText: string;
}

export interface IFormStatusPagamento {
  data: IData;
  event: string;
}

export interface IData {
  account_id: string;
  id: string;
  order_id: string;
  paid_at: Date;
  payer_cpf_cnpj: string;
  payment_method: string;
  status: string;
  subscription_id: string;
}

export interface IFaturaResponse {
  authorized_at_iso: Date;
  bank_slip: IBoletoResponse;
  canceled_at_iso: Date;
  chargeback_at_iso: Date;
  created_at_iso: Date;
  due_date: string;
  email: string;
  expired_at_iso: Date;
  id: string;
  items_total_cents: number;
  payer_cpf_cnpj: string;
  payer_name: string;
  pix: IPixResponse;
  protested_at_iso: Date;
  refunded_at_iso: Date;
  secure_id: string;
  secure_url: string;
  status: string;
  updated_at: Date;
}

export interface IBoletoResponse {
  bank_slip_bank: number;
  bank_slip_error_code: string;
  bank_slip_error_message: string;
  bank_slip_status: string;
  barcode: string;
  barcode_data: string;
  digitable_line: string;
  recipient_cpf_cnpj: string;
}

export interface IPixResponse {
  account_number_last_digits: string;
  end_to_end_id: string;
  end_to_end_refund_id: string;
  payer_cpf_cnpj: string;
  payer_name: string;
  qrcode: string;
  qrcode_text: string;
  status: string;
}

export interface IReembolsoResponse {
  currency: string;
  discount_cents: string;
  due_date: string;
  email: string;
  id: string;
  items_total_cents: number;
  notification_url: string;
  return_url: string;
  status: string;
}
