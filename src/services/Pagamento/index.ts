import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave/index";
import {
  IFaturaDTO,
  IFaturaResponse,
  IFormStatusPagamento,
  IReembolsoResponse,
} from "../../types/pagamento";
import { FormaPagamentoEnum } from "../../enums/formaPagamento";
import { IReembolsoProps } from "../../types/agendamento";

const basePath = "/pagamento";

export class Pagamento {
  static async consultarFatura({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IFaturaDTO>> {
    return ApiBrave.get(
      `${basePath}/agendamento/${uuidAgendamento}/consultar-fatura`
    );
  }

  static async cancelarPagamento({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IReembolsoResponse>> {
    return ApiBrave.put(
      `${basePath}/agendamento/${uuidAgendamento}/cancelar-fatura`
    );
  }

  static async statusPagamento({ form }: { form: IFormStatusPagamento }) {
    return ApiBrave.get(`${basePath}/status-pagamento`, form);
  }

  static async gerarFatura({
    uuidAgendamento,
    formaPagamento,
  }: {
    uuidAgendamento: string;
    formaPagamento: FormaPagamentoEnum;
  }): Promise<AxiosResponse<IFaturaResponse>> {
    return ApiBrave.post(
      `${basePath}/agendamento/${uuidAgendamento}/gerar-fatura?formaPagamento=${formaPagamento}`
    );
  }

  static async reembolso(
    props: IReembolsoProps
  ): Promise<AxiosResponse<IReembolsoResponse>> {
    const { uuid, ...rest } = props;
    return ApiBrave.post(`${basePath}/agendamento/${uuid}/reembolsar`, rest);
  }
  
}
