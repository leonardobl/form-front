import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import { removeEmpty } from "../../utils/removeEmpty";
import { IPageDeliveryDTO } from "../../types/delivery";

import { IPageRequest } from "../../types/page";

const basePath = "/delivery";

interface IGetDeliveryProps extends IPageRequest {
  cidade?: string;
}

export class Delivery {
  static async get(
    props?: IGetDeliveryProps
  ): Promise<AxiosResponse<IPageDeliveryDTO>> {
    const params = props ? removeEmpty(props) : null;
    return params
      ? ApiBrave.get(`${basePath}?${params}`)
      : ApiBrave.get(basePath);
  }

  static async getDiasIndisponiveis({
    uuidDelivery,
  }: {
    uuidDelivery: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(`${basePath}/${uuidDelivery}/dias-indiponiveis`);
  }

  static async getHorariosDisponiveis({
    uuidDelivery,
    dataAgendamento,
  }: {
    uuidDelivery: string;
    dataAgendamento: string;
  }): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(
      `${basePath}/${uuidDelivery}/horarios-disponiveis?dataAgendamento=${dataAgendamento}`
    );
  }
}
