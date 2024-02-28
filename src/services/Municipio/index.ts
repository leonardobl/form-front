import { AxiosResponse } from "axios";
import { IPageRequest } from "../../types/page";
import { ApiBrave } from "../../Apis/Brave/index";
import { IPageMunicipioDTO } from "../../types/municipio";
import { EstadosEnum } from "../../enums/estados";
import objectToParams from "../../utils/objectToParams";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/municipio";

interface IMunicipioProps extends IPageRequest {
  estado?: EstadosEnum;
  nome?: string;
}

export class Municipio {
  static async get(
    props?: IMunicipioProps
  ): Promise<AxiosResponse<IPageMunicipioDTO>> {
    const values = removeEmpty(props);
    const params = objectToParams(values);
    return ApiBrave.get(params ? `${basePath}?${params}` : basePath);
  }
}
