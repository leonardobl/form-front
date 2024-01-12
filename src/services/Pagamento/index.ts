import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave/index";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";
import {
  IFaturaDTO,
  IFaturaResponse,
  IFormStatusPagamento,
  IReembolsoResponse,
} from "../../types/pagamento";

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
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IFaturaResponse>> {
    return ApiBrave.post(
      `${basePath}/agendamento/${uuidAgendamento}/gerar-fatura`
    );
  }

  static async reembolso({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IReembolsoResponse>> {
    return ApiBrave.post(
      `${basePath}/agendamento/${uuidAgendamento}/reembolsar`
    );
  }
}
