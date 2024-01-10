import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { InputCustom } from "../../Atoms/Inputs/InputCustom";
import { useContextSite } from "../../../context/Context";
import { Agendamento } from "../../../services/Agendamento";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { reverseToBrDate } from "../../../utils/dateTransform";
import { maskCpf, maskMoney } from "../../../utils/masks";
import { ButtonCustom } from "../../Atoms/ButtonCustom";
import { CustomConfirmModal } from "../../Atoms/CustomConfirmModal";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

export const SchedulingDetailTemplate = () => {
  const { setIsLoad } = useContextSite();
  const { id } = useParams();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const [isOpen, setISOpen] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    if (id) {
      Agendamento.getById({ uuid: id })
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
  }, [id]);

  return (
    <LayoutTemplate>
      <S.Container>
        <S.Content>
          <S.TItle>Meu agendamento</S.TItle>
          <S.Text>
            Esses são os dados do seu <S.TextBlue>agendamento</S.TextBlue>!
          </S.Text>
          <S.Form>
            <S.WrapperBorder $borderBottom>
              <S.Grid $gridTemplate="3fr 1fr 1fr">
                <S.SubTitle>Status</S.SubTitle>

                <S.SubTitle>Data</S.SubTitle>
                <S.SubTitle>Horário</S.SubTitle>

                <InputCustom readOnly value={agendamento?.status} />

                <InputCustom
                  readOnly
                  value={reverseToBrDate(agendamento?.diaAgendado)}
                />
                <InputCustom readOnly value={agendamento?.horaAgendada} />
              </S.Grid>
            </S.WrapperBorder>

            <S.WrapperBorder $borderBottom>
              <S.Grid $gridTemplate="8fr 4fr">
                <S.SubTitle>Cliente</S.SubTitle>
                <S.SubTitle>CPF/CNPJ</S.SubTitle>

                <InputCustom
                  readOnly
                  value={agendamento?.cliente?.nome || "---"}
                />
                <InputCustom
                  readOnly
                  value={maskCpf(agendamento?.cliente?.cpfCnpj) || "---"}
                />
              </S.Grid>

              <S.Grid $gridTemplate="5fr 2fr 2fr">
                <S.SubTitle>Modelo do carro</S.SubTitle>
                <S.SubTitle>Placa</S.SubTitle>
                <S.SubTitle>Renavam</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.modelo || "---"}
                />
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.placa || "---"}
                />
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.renavam || "---"}
                />
              </S.Grid>

              <S.Grid $gridTemplate="1fr">
                <S.SubTitle>Chassi</S.SubTitle>
                <InputCustom
                  readOnly
                  value={agendamento?.veiculo?.chassi || "---"}
                />
              </S.Grid>
            </S.WrapperBorder>

            <S.WrapperBorder>
              <S.Grid $gridTemplate="8fr 4fr">
                <S.SubTitle>Serviço</S.SubTitle>
                <S.SubTitle>Valor do serviço</S.SubTitle>

                <InputCustom
                  readOnly
                  value={agendamento?.servico?.nome || "---"}
                />

                <InputCustom
                  readOnly
                  value={maskMoney(agendamento?.servico?.valorPadrao) || "---"}
                />
              </S.Grid>
              <S.Grid $gridTemplate="12fr">
                <S.SubTitle>Local de realização da vistoria</S.SubTitle>
                <InputCustom
                  readOnly
                  value={
                    agendamento?.loja?.endereco
                      ? `${agendamento?.loja?.endereco?.logradouro} - ${agendamento?.loja?.endereco?.bairro}, ${agendamento?.loja?.endereco?.cidade} - ${agendamento?.loja?.endereco?.uf}`
                      : "---"
                  }
                />
              </S.Grid>
            </S.WrapperBorder>
          </S.Form>

          {![
            StatusAgendamentoEnum.CANCELADO,
            StatusAgendamentoEnum.FINALIZADO,
          ].includes(agendamento?.status) && (
            <S.WrapperBtns>
              <ButtonCustom typeOfButton="Ghost">REAGENDAR</ButtonCustom>
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
