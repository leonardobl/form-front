import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave } from "../../Apis/Brave/index";
import { IPageLojaDTO } from "../../types/loja";

interface ILojaParams extends IPageRequest {
  nome?: string;
}

const basePath = "/loja";

export class Loja {
  static async get(props?: ILojaParams): Promise<AxiosResponse<IPageLojaDTO>> {
    return ApiBrave.get(`${basePath}`);
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
