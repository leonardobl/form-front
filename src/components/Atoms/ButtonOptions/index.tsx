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

interface IButtonOptions extends ComponentProps<"details"> {
  disabled?: boolean;
  onCancel: () => void;
  handlePix: () => void;
  handleTicket: () => void;
  handleConfirmPayment: () => void;
  agendamento: IAgendamentoDTO;
}

export const ButtonOptions = ({
  disabled,
  onCancel,
  handlePix,
  handleConfirmPayment,
  handleTicket,
  agendamento,
}: IButtonOptions) => {
  const { setIsLoad } = useContextSite();
  const [isOpen, setISOpen] = useState(false);
  const [sessionAgendamento, setSessionagendamento] =
    useSessionStorage("agendamentoSession");
  const navigate = useNavigate();

  const isAdmGerente = sessionAgendamento?.roles?.some(
    (regra) =>
      regra === RolesEnum.ROLE_ADMIN || regra === RolesEnum.ROLE_GERENTE
  );

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
      isAdmGerente
        ? navigate(`/novo-agendamento?id=${agendamento?.uuid}`)
        : navigate(
            `/agendamento/${agendamento.tipoAtendimento?.toLowerCase()}`
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

        <div>
          <div>
            <button onClick={onRescheduling}>reagendar</button>
          </div>
        </div>

        <div>
          <div>
            <button onClick={() => setISOpen(true)}>cancelar</button>
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
      </div>
      <div className="summary-chevron-down">
        <S.ArrowDown src="/assets/svgs/arrow-right.svg" alt="seta direita" />
      </div>

      <MyModal isOpen={isOpen} onRequestClose={() => setISOpen(false)}>
        <S.ModalContent>
          <p>Tem certeza que deseja cancelar sua vistoria?</p>

          <div className="wrapperButtons">
            <Button
              data-variant-danger
              onClick={() => {
                setISOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              data-variant-dark
              onClick={() => {
                setISOpen(false);
                onCancel();
              }}
            >
              Confirmar
            </Button>
          </div>
        </S.ModalContent>
      </MyModal>
    </S.Container>
  );
};
