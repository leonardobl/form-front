import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave } from "../../Apis/Brave/index";
import { IPageLojaDTO } from "../../types/loja";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";

interface ILojaParams extends IPageRequest {
  nome?: string;
}

const basePath = "/loja";

export class Loja {
  static async get(props?: ILojaParams): Promise<AxiosResponse<IPageLojaDTO>> {
    const params = objectToParams(props);

    return ApiBrave.get(params ? `${basePath}?${params}` : `${basePath}`);
  }

  static async getDiasIndisponiveis({
    uuidLoja,
  }: {
    uuidLoja: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(`${basePath}/${uuidLoja}/dias-indiponiveis`);
  }

  static async getHorariosDisponiveis({
    uuidLoja,
    dataAgendamento,
  }: {
    uuidLoja: string;
    dataAgendamento: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(
      `${basePath}/${uuidLoja}/horarios-disponiveis?dataAgendamento=${dataAgendamento}`
    );
  }
}
