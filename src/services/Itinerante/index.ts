import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import {
  IItineranteDTO,
  IItineranteForm,
  IItineranteListProps,
  IPageItineranteDTO,
} from "../../types/itinerante";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/itinerante";

export class Itinerante {
  static async list(
    props?: IItineranteListProps
  ): Promise<AxiosResponse<IPageItineranteDTO>> {
    const values = removeEmpty(props);

    const params = new URLSearchParams(values)?.toString();
    return ApiBrave.get(params ? `${basePath}?${params}` : basePath);
  }

  static async byId(
    uuidItinerante: string
  ): Promise<AxiosResponse<IItineranteDTO>> {
    return ApiBrave.get(`${basePath}/${uuidItinerante}`);
  }

  static async horarios_disponiveis(
    uuidItinerante: string
  ): Promise<AxiosResponse<string[]>> {
    return ApiBrave.get(`${basePath}/${uuidItinerante}/horarios-disponiveis`);
  }

  static async vagas_disponiveis(
    uuidItinerante: string
  ): Promise<AxiosResponse<number>> {
    return ApiBrave.get(`${basePath}/${uuidItinerante}/vagas-disponiveis`);
  }

  static async create(
    data: IItineranteForm
  ): Promise<AxiosResponse<IItineranteDTO>> {
    return ApiBrave.post(basePath, data);
  }
}
