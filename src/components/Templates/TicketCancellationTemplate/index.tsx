import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Text } from "../../Atoms/Text";
import { SwitchOptions } from "../../Atoms/SwitchOptions";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";
import { useTicketCancellation } from "./useTicketCancellation";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../types/inputs";

export const TicketCancellationTemplate = () => {
  const { tipoPagamento, setTipoPagamento, form, setForm, handleCancel } =
    useTicketCancellation();

  return (
    <S.Container>
      <Title>Formulário de Reembolso</Title>

      <Text>
        Selecione a <span className="textStrong">forma de reembolso</span>.
      </Text>

      <S.WrapperPayment>
        <SwitchOptions
          value={tipoPagamento}
          IconA="/assets/svgs/pix1.svg"
          IconB="/assets/svgs/deposito.svg"
          optionA={{
            label: "Pix",
            value: FormaPagamentoEnum.PIX,
          }}
          optionB={{
            label: "Depósito",
            value: FormaPagamentoEnum.DEPOSITO,
          }}
          className="paymentSwitch"
          handleOnChange={(v) => setTipoPagamento(FormaPagamentoEnum[v])}
        />
      </S.WrapperPayment>
      <Title>Reembolso via PIX</Title>

      {tipoPagamento === FormaPagamentoEnum.PIX ? (
        <S.FormPix onSubmit={handleCancel}>
          <div>
            <Input
              label="Titular"
              required
              value={form?.titular}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, titular: e?.target?.value }))
              }
            />
          </div>

          <div>
            <Input
              label="Chave PIX"
              required
              value={form?.chavepix}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, chavepix: e?.target?.value }))
              }
            />
          </div>

          <Button>Confirmar</Button>
        </S.FormPix>
      ) : (
        <S.FormTicket onSubmit={handleCancel}>
          <div>
            <Input
              required
              label="Titular"
              value={form?.titular}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, titular: e?.target?.value }))
              }
            />
          </div>

          <div>
            <SimpleSelect
              required
              label="Banco"
              value={form?.banco}
              onChange={(e: ISelectOptions) =>
                setForm((prev) => ({ ...prev, banco: e?.value }))
              }
            />
          </div>

          <div>
            <Input
              required
              label="Agência"
              value={form?.agencia}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, agencia: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              required
              label="Conta"
              value={form?.conta}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, conta: e.target.value }))
              }
            />
          </div>

          <div>
            <Input
              label="Operação"
              value={form?.operacao}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, operacao: e.target.value }))
              }
            />
          </div>

          <div>
            <Button>Confirmar</Button>
          </div>
        </S.FormTicket>
      )}
    </S.Container>
  );
};
