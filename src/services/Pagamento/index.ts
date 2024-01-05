import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave/index";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";
import {
  IFaturaDTO,
  IFaturaResponse,
  IFormStatusPagamento,
} from "../../types/pagamento";

const basePath = "/pagamento";

export class Pagamento {
  static async get({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IFaturaDTO>> {
    return ApiBrave.get(
      `${basePath}/agendamento/${uuidAgendamento}/consultar-fatura`
    );
  }

  static async getStatus({ form }: { form: IFormStatusPagamento }) {
    return ApiBrave.get(`${basePath}/status-pagamento`);
  }

  static async post({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IFaturaResponse>> {
    return ApiBrave.post(
      `${basePath}/agendamento/${uuidAgendamento}/gerar-fatura`
    );
  }
}
