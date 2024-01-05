import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave/index";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";
import { IFaturaDTO } from "../../types/pagamento.s";

const basePath = "/pagamento";

export class Municipio {
  static async get({
    uuidAgendamento,
  }: {
    uuidAgendamento: string;
  }): Promise<AxiosResponse<IFaturaDTO>> {
    return ApiBrave.get(
      `${basePath}/agendamento/${uuidAgendamento}/consultar-fatura`
    );
  }
}
