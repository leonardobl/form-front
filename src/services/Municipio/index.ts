import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave } from "../../Apis/Brave/index";
import { IPageMunicipioDTO } from "../../types/municipio";
import { EstadosEnum } from "../../enums/estados";
import { removeEmpty } from "../../utils/removeEmpty";
import objectToParams from "../../utils/objectToParams";

const basePath = "/municipio";

interface IMunicipioProps extends IPageRequest {
  estado?: EstadosEnum;
  nome?: string;
}

export class Municipio {
  static async get(
    props?: IMunicipioProps
  ): Promise<AxiosResponse<IPageMunicipioDTO>> {
    const params = objectToParams(props);
    return ApiBrave.get(params ? `${basePath}?${params}` : basePath);
  }
}
