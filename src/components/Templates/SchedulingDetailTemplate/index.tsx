import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCnpj, maskCpf, maskMoney } from "../../../utils/masks";
import { Button } from "../../Atoms/Button";
import { CustomConfirmModal } from "../../Atoms/CustomConfirmModal";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { OrdemServico } from "../../../services/OrdemServico";

export const SchedulingDetailTemplate = () => {
  const { setIsLoad } = useContextSite();

  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const [isOpen, setISOpen] = useState(false);
  const [detalheAgendamento, setDetalheAgendamento] =
    useSessionStorage("detalheAgendamento");
  const [reagendamento, setReagendamento] = useSessionStorage("reagendamento");
  const [urlLaudo, setUrlLaudo] = useState<string>("");

  function onRescheduling() {
    setIsLoad(true);
    setReagendamento(agendamento?.uuid);
    setTimeout(() => {
      window.open(
        `/agendamento/${agendamento?.tipoAtendimento?.toLowerCase()}`,
        "_self"
      );
      setIsLoad(false);
    }, 1000);
  }

  useEffect(() => {
    setIsLoad(true);
    if (detalheAgendamento) {
      Agendamento.getById({ uuid: detalheAgendamento })
        .then(({ data }) => setAgendamento(data))
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        )
        .finally(() => setIsLoad(false));
    }
  }, [detalheAgendamento]);

  useEffect(() => {
    if (agendamento?.status === StatusAgendamentoEnum.FINALIZADO) {
      OrdemServico.getUrlLaudo({ uuidAgendamento: agendamento?.uuid })
        .then(({ data }) => setUrlLaudo(data))
        .catch(
          ({
            response: {
              data: { mensagem },
            },
          }) => toast.error(mensagem)
        );
    }
  }, [agendamento]);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.Title>Meu agendamento</S.Title>
          <S.Text>
            Esses são os dados do seu <S.TextBlue>agendamento</S.TextBlue>!
          </S.Text>
          <S.Form>
            <S.Grid>
              <div>
                <S.SubTitle>Status</S.SubTitle>
                <InputCustom readOnly value={agendamento?.status} />
              </div>

              <div>
                <S.SubTitle>Data</S.SubTitle>
                <InputCustom
                  readOnly
                  value={reverseToBrDate(agendamento?.diaAgendado)}
                />
              </div>

              <div>
                <S.SubTitle>Horário</S.SubTitle>
                <InputCustom readOnly value={agendamento?.horaAgendada} />
              </div>

              <div>
                <S.SubTitle>Cliente</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.cliente?.nome || "---"}
                />
              </div>

              <div>
                <S.SubTitle>CPF/CNPJ</S.SubTitle>
                <InputCustom
                  readOnly
                  value={
                    agendamento?.cliente?.cpfCnpj?.length > 11
                      ? maskCnpj(agendamento?.cliente?.cpfCnpj)
                      : maskCpf(agendamento?.cliente?.cpfCnpj)
                  }
                />
              </div>

              <div>
                <S.SubTitle>Telefone</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.cliente?.telefone || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Email</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.cliente?.email || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Modelo do carro</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.modelo || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Placa</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.placa || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Renavam</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.renavam || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Chassi</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.chassi || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Serviço</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.servico?.nome || "---"}
                />
              </div>

              <div>
                <S.SubTitle>Valor do serviço</S.SubTitle>
                <InputCustom
                  readOnly
                  value={
                    maskMoney(agendamento?.servico?.valorPadrao / 100) || "---"
                  }
                />
              </div>

              <div>
                <S.SubTitle>Local de realização da vistoria</S.SubTitle>
                <InputCustom
                  readOnly
                  value={
                    agendamento?.loja?.endereco
                      ? `${agendamento?.loja?.endereco?.logradouro} - ${agendamento?.loja?.endereco?.bairro}, ${agendamento?.loja?.endereco?.cidade} - ${agendamento?.loja?.endereco?.uf}`
                      : "---"
                  }
                />
              </div>
              {[StatusAgendamentoEnum.FINALIZADO].includes(
                agendamento?.status
              ) && (
                <div>
                  <S.SubTitle>URL do laudo</S.SubTitle>
                  <InputCustom readOnly value={urlLaudo} />
                </div>
              )}
            </S.Grid>
          </S.Form>

          {![
            StatusAgendamentoEnum.CANCELADO,
            StatusAgendamentoEnum.FINALIZADO,
          ].includes(agendamento?.status) && (
            <S.WrapperBtns>
              <Button data-variant-border onClick={onRescheduling}>
                REAGENDAR
              </Button>
              <Button data-variant-border onClick={() => setISOpen(true)}>
                CANCELAR
              </Button>
            </S.WrapperBtns>
          )}
        </S.Content>
      </S.Container>
      <CustomConfirmModal
        isOpen={isOpen}
        onRequestClose={() => setISOpen(false)}
      >
        <S.ModalContent>
          <p>Tem certeza que deseja cancelar sua vistoria?</p>
          <Button data-variant-login onClick={() => setISOpen(false)}>
            CONFIRMAR
          </Button>
        </S.ModalContent>
      </CustomConfirmModal>
    </LayoutTemplate>
  );
};
