import React, { useState, ComponentProps, useEffect } from "react";
import * as S from "./styles";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";

import { Button } from "../Button";
import { useContextSite } from "../../../context/Context";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";
import { useNavigate } from "react-router-dom";
import { MyModal } from "../MyModal";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { Text } from "../Text";
import { useButtonOptions } from "./useButtonOptions";

interface IButtonOptions extends ComponentProps<"details"> {
  disabled?: boolean;
  onCancel: () => void;
  handlePix: () => void;
  handleTicket: () => void;
  handleConfirmPayment: () => void;
  handleReturnStatus: () => void;
  agendamento: IAgendamentoDTO;
  handleConfirmRefund: () => void;
}

export const ButtonOptions = ({
  disabled,
  onCancel,
  handlePix,
  handleConfirmPayment,
  handleReturnStatus,
  handleTicket,
  agendamento,
  handleConfirmRefund,
}: IButtonOptions) => {
  const {
    isIntern,
    isOpen,
    navigate,
    setISOpen,
    setIsLoad,
    sessionAgendamento,
    setSessionagendamento,
    handleCancel,
    recursos,
  } = useButtonOptions();

  function onRescheduling() {
    setIsLoad(true);
    // setSessionagendamento({
    //   ...sessionAgendamento,
    //   uuidAgendamento: agendamento?.uuid,
    //   reagendamento: true,
    //   tipoAtendimento: agendamento.tipoAtendimento,
    //   cliente: {
    //     ...agendamento.cliente,
    //   },
    //   veiculo: { ...agendamento.veiculo },
    // });
    setSessionagendamento({
      ...sessionAgendamento,
      uuidAgendamento: agendamento?.uuid,
      reagendamento: true,
    });
    setTimeout(() => {
      isIntern
        ? navigate(`/novo-agendamento?id=${agendamento?.uuid}`)
        : navigate(
            `/agendamento/${
              agendamento.uuid
            }/${agendamento.tipoAtendimento?.toLowerCase()}?reagendamento=true`
          );

      setIsLoad(false);
    }, 1000);
  }

  return (
    <S.Container
      data-disabled={false}
      data-color-starcheck={process.env.REACT_APP_PROJECT === "starcheck"}
      data-color-log={process.env.REACT_APP_PROJECT === "log"}
      data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
      data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
    >
      <summary>
        <div>
          <span className="summary-title">ações</span>
        </div>
        <div className="summary-chevron-up">
          <img src="/assets/svgs/arrow-right.svg" alt="seta direita" />
        </div>
      </summary>

      <div
        className="summary-content"
        data-color-starcheck={process.env.REACT_APP_PROJECT === "starcheck"}
        data-color-log={process.env.REACT_APP_PROJECT === "log"}
        data-color-vlx={process.env.REACT_APP_PROJECT === "vlx"}
        data-color-tokyo={process.env.REACT_APP_PROJECT === "tokyo"}
      >
        {agendamento.status === StatusAgendamentoEnum.AGUARDANDO_PAGAMENTO &&
          [RolesEnum.ROLE_ADMIN, RolesEnum.ROLE_SUPORTE].some((role) =>
            sessionAgendamento?.roles?.includes(role)
          ) && (
            <div>
              <div>
                <button onClick={handleConfirmPayment}>
                  Confirmar pagamento
                </button>
              </div>
            </div>
          )}

        {agendamento.status === StatusAgendamentoEnum.INICIADO &&
          [RolesEnum.ROLE_ADMIN, RolesEnum.ROLE_GERENTE].some((role) =>
            sessionAgendamento?.roles?.includes(role)
          ) && (
            <div>
              <div>
                <button onClick={handleReturnStatus}>Retornar status</button>
              </div>
            </div>
          )}

        {agendamento.status === StatusAgendamentoEnum.AGENDADO && (
          <div>
            <div>
              <button onClick={onRescheduling}>Reagendar</button>
            </div>
          </div>
        )}

        <div>
          <div>
            <button onClick={() => setISOpen(true)}>Cancelar</button>
          </div>
        </div>

        {agendamento.status === StatusAgendamentoEnum.PAGO && (
          <div>
            <div>
              <button
                onClick={() =>
                  navigate(
                    `/agendamento/${agendamento?.uuid}/confirmar-horario`
                  )
                }
              >
                Realizar Agendamento
              </button>
            </div>
          </div>
        )}

        {agendamento.status === StatusAgendamentoEnum.AGUARDANDO_PAGAMENTO && (
          <>
            <div>
              <div>
                <button onClick={handlePix}>Ver fatura</button>
              </div>
            </div>

            {/* <div>
              <div>
                <button onClick={handleTicket}>verificar boleto</button>
              </div>
            </div> */}
          </>
        )}

        {(sessionAgendamento?.roles?.includes(RolesEnum.ROLE_ADMIN)
        || recursos?.includes('CONFIMAR_REEMBOLSO')) 
        && (
          <div>
            <div>
              <button onClick={handleConfirmRefund}>Confirmar Reembolso</button>
            </div>
          </div>
        )}

        <div>
          <div>
            <a
              href={`/assets/docs/checklist-${process.env.REACT_APP_PROJECT}.pdf`}
              download
            >
              Baixar Checklist
            </a>
          </div>
        </div>
      </div>
      <div className="summary-chevron-down">
        <S.ArrowDown src="/assets/svgs/arrow-right.svg" alt="seta direita" />
      </div>
      

      <MyModal isOpen={isOpen} onRequestClose={() => setISOpen(false)}>
        <S.ModalContent>
          <S.HeaderModal>
            <S.WrapperButtonClose>
              <button onClick={() => setISOpen(false)}>X</button>
            </S.WrapperButtonClose>

            <Text>
              Tem certeza que deseja{" "}
              <span className="textStrong">cancelar</span> sua vistoria?
            </Text>
          </S.HeaderModal>
          <S.WrapperText>
            <h4>Reembolso via PIX</h4>
            <p>
              Agendamentos pagos via <span>PIX</span> o reembolso acontecerá em{" "}
              <span>até 72h</span>.
            </p>

            <h4>Reembolso via Boleto</h4>
            <p>
              Agendamentos pagos via <span>Boleto</span> terão reembolso em{" "}
              <span>até 72h após compensação</span> com solicitação via
              preenchimento de formulário.
            </p>

            <S.WrapperButtonsModal>
              <button onClick={() => setISOpen(false)}>Cancelar</button>
              <Button onClick={() => handleCancel(agendamento)}>
                Confirmar
              </Button>
            </S.WrapperButtonsModal>
          </S.WrapperText>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
