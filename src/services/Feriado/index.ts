import { IFeriadoDTO, IFeriadoForm } from "./../../types/feriado.d";
import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";
import { IFeriadoListProps, IPageFeriadoDTO } from "../../types/feriado";
import { removeEmpty } from "../../utils/removeEmpty";

const basePath = "/feriado";

export class Feriado {
  static async list(
    props: IFeriadoListProps
  ): Promise<AxiosResponse<IPageFeriadoDTO>> {
    const values = removeEmpty(props);
    const params = new URLSearchParams(values).toString();

    return ApiBrave.get(
      params ? `${basePath}/listar?${params}` : `${basePath}/listar`
    );
  }

  static async cadastrar(
    data: IFeriadoForm
  ): Promise<AxiosResponse<IFeriadoDTO>> {
    const PAYLOAD = removeEmpty(data);

    return ApiBrave.post(`${basePath}/cadastrar`, PAYLOAD);
  }
}
