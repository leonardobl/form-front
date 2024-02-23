import React, { useState, ComponentProps } from "react";
import * as S from "./styles";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { StatusAgendamentoEnum } from "../../../enums/statusAgendamento";
import { CustomConfirmModal } from "../CustomConfirmModal";
import { Button } from "../Button";
import { useContextSite } from "../../../context/Context";
import { useSessionStorage } from "../../../hooks/useSessionStorage";
import { RolesEnum } from "../../../enums/roles";
import { useNavigate } from "react-router-dom";

interface IButtonOptions extends ComponentProps<"details"> {
  disabled?: boolean;
  tipoAtendimento: TipoAtendimentoEnum;
  uuidAgendamento: string;
  onCancel: () => void;
  handlePix: () => void;
  handleTicket: () => void;
  handleConfirmPayment: () => void;
  status: StatusAgendamentoEnum;
}

export const ButtonOptions = ({
  tipoAtendimento,
  disabled,
  uuidAgendamento,
  onCancel,
  status,
  handlePix,
  handleConfirmPayment,
  handleTicket,
}: IButtonOptions) => {
  const { setIsLoad } = useContextSite();
  const [reagendamento, setReagendamento] = useSessionStorage("reagendamento");
  const [isOpen, setISOpen] = useState(false);
  const [sessionCliente, setSessionCliente] = useSessionStorage("cliente");
  const navigate = useNavigate();

  function onRescheduling() {
    setIsLoad(true);
    setReagendamento(uuidAgendamento);
    setTimeout(() => {
      navigate(`/${tipoAtendimento?.toLowerCase()}`);
      setIsLoad(false);
    }, 1000);
  }

  return (
    <S.Container data-disabled={false}>
      <summary>
        <div>
          <span className="summary-title">ações</span>
        </div>
        <div className="summary-chevron-up">
          <img src="/assets/svgs/arrow-right.svg" alt="seta direita" />
        </div>
      </summary>

      <div className="summary-content">
        {status === StatusAgendamentoEnum.AGUARDANDO_PAGAMENTO &&
          [RolesEnum.ROLE_ADMIN, RolesEnum.ROLE_SUPORTE].some((role) =>
            sessionCliente?.role?.includes(role)
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

        {status === StatusAgendamentoEnum.AGUARDANDO_PAGAMENTO && (
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

      <CustomConfirmModal
        isOpen={isOpen}
        onRequestClose={() => setISOpen(false)}
      >
        <S.ModalContent>
          <p>Tem certeza que deseja cancelar sua vistoria?</p>
          <Button
            data-variant-dark
            onClick={() => {
              setISOpen(false);
              onCancel();
            }}
          >
            CONFIRMAR
          </Button>
        </S.ModalContent>
      </CustomConfirmModal>
    </S.Container>
  );
};
