import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { toast } from "react-toastify";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCpf, maskMoney } from "../../../utils/masks";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { CustomConfirmModal } from "../../Atoms/CustomConfirmModal";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { useSessionStorage } from "../../../hooks/useSessionStorage";

export const SchedulingDetailTemplate = () => {
  const { setIsLoad } = useContextSite();

  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const [isOpen, setISOpen] = useState(false);
  const [detalheAgendamento, setDetalheAgendamento] =
    useSessionStorage("detalheAgendamento");
  const [reagendamento, setReagendamento] = useSessionStorage("reagendamento");

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
                  value={maskCpf(agendamento?.cliente?.cpfCnpj) || "---"}
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
                  value={maskMoney(agendamento?.servico?.valorPadrao) || "---"}
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
            </S.Grid>
          </S.Form>

          {![
            StatusAgendamentoEnum.CANCELADO,
            StatusAgendamentoEnum.FINALIZADO,
          ].includes(agendamento?.status) && (
            <S.WrapperBtns>
              <ButtonCustom typeOfButton="Ghost" onClick={onRescheduling}>
                REAGENDAR
              </ButtonCustom>
              <ButtonCustom
                typeOfButton="Ghost"
                onClick={() => setISOpen(true)}
              >
                CANCELAR
              </ButtonCustom>
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
          <ButtonCustom typeOfButton="Login" onClick={() => setISOpen(false)}>
            CONFIRMAR
          </ButtonCustom>
        </S.ModalContent>
      </CustomConfirmModal>
    </LayoutTemplate>
  );
};
