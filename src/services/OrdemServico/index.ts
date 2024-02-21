import { AxiosResponse } from "axios";
import { ApiBrave } from "../../Apis/Brave";

const basePath = "/ordem-servico";

export class OrdemServico {
    static async getUrlLaudo({
        uuidAgendamento,
      }: {
        uuidAgendamento: string;
      }): Promise<AxiosResponse<string>> {
        return ApiBrave.get(`${basePath}/agendamento/${uuidAgendamento}/url-laudo`);
      }
}