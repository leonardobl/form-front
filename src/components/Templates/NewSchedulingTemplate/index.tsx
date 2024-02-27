import React, { useEffect, useState } from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Button } from "../../Atoms/Button";
import { AsyncSimpleSelect } from "../../Atoms/Selects/AsyncSelect";
import { v4 } from "uuid";
import { components } from "react-select";
import { MyModal } from "../../Atoms/MyModal";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { SwitchOptions } from "../../Atoms/SwitchOptions";
import { TipoAtendimentoEnum } from "../../../enums/tipoAtendimento";
import { Text } from "../../Atoms/Text";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { OpcoesServicosEnum } from "../../../enums/opcoesServicos";
import { FormaPagamentoEnum } from "../../../enums/formaPagamento";

const options = [
  {
    label: `Leonardo Bernardo Lima - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
  {
    label: `Leonardo Lima - cpf/cnpj: 014.269.043-04`,
    value: v4(),
  },
  {
    label: `Leonardo - cpf/cnpj: 014.269.043-04 `,
    value: v4(),
  },
];

export const NewSchedulingTemplate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tipoAtendimento, setTipoAtendimento] = useState<TipoAtendimentoEnum>();
  const [tipoPagamento, setTipoPagamento] = useState<FormaPagamentoEnum>();
  const [tipoServico, setTipoServico] = useState<OpcoesServicosEnum>();
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };
  const [cliente, setCliente] = useState(false);

  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <S.WrapperValue>
        {props.data.label}
        <img src={"/assets/svgs/plus-round.svg"} alt={"icone adicionar"} />
      </S.WrapperValue>
    </Option>
  );

  return (
    <LayoutTemplate>
      <MyModal
        onRequestClose={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
      >
        <S.FormModal>
          <S.GridModal onSubmit={() => setCliente(true)}>
            <div>
              <Input label="Nome" required />
            </div>
            <div>
              <Input label="CPF/CNPJ" required />
            </div>
            <div>
              <Input label="E-mail" />
            </div>
            <div>
              <Input label="Telefone" />
            </div>
            <div>
              <SimpleSelect label="Tipo" required />
            </div>
            <div>
              <Input label="CEP" required />
            </div>
            <div>
              <Input label="Endereço (Rua)" required />
            </div>
            <div>
              <Input label="Complemento" required />
            </div>
            <div>
              <Input label="Bairro" required />
            </div>
            <div>
              <SimpleSelect label="UF" required />
            </div>
            <div>
              <SimpleSelect label="Cidade" required />
            </div>
            <div>
              <Button>Salvar</Button>
            </div>
          </S.GridModal>
        </S.FormModal>
      </MyModal>
      <S.Container>
        <Title>Novo agendamento</Title>
        <S.FormSearch>
          <div>
            <AsyncSimpleSelect
              variant="search"
              placeholder=""
              isClearable
              noOptionsMessage={() => (
                <S.NotFoundvalue>
                  Não encontrado
                  <img
                    src={"/assets/svgs/plus-round.svg"}
                    alt={"icone de aidciionar"}
                    onClick={() => setModalIsOpen(true)}
                  />
                </S.NotFoundvalue>
              )}
              loadOptions={getValues}
              onChange={(e) => setCliente(() => (e?.value ? true : false))}
              options={options}
              components={{ Option: IconOption }}
            />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.FormSearch>

        {cliente && (
          <>
            <S.FormUser>
              <S.GridUser>
                <div>
                  <Input label="Nome" readOnly />
                </div>

                <div>
                  <Input label="CPF/CNPJ" readOnly />
                </div>

                <div>
                  <Input label="Telefone" readOnly />
                </div>

                <div>
                  <Input label="E-mail" readOnly />
                </div>

                <div>
                  <Input label="Tipo" readOnly />
                </div>
              </S.GridUser>
            </S.FormUser>
            <SwitchOptions
              optionA={{
                label: "Loja Física",
                value: TipoAtendimentoEnum.LOJA,
              }}
              optionB={{
                label: "Domicílio",
                value: TipoAtendimentoEnum.DOMICILIO,
              }}
              className="optionAtendance"
              handleOnChange={(v) => setTipoAtendimento(TipoAtendimentoEnum[v])}
            />
            <Title>
              {tipoAtendimento === TipoAtendimentoEnum.LOJA
                ? "Loja Física"
                : "Domicílio"}
            </Title>
            <S.FormAtendence>
              <S.GridAtendece>
                <div>
                  <SimpleSelect
                    required
                    label={
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? "Loja"
                        : "Cidade"
                    }
                  />
                </div>

                <div>
                  <Text>
                    Datas e horários{" "}
                    <span className="textStrong">disponíveis</span>.
                  </Text>
                </div>

                <div>
                  <InputDate
                    required
                    label="Data"
                    showIcon
                    onChange={() => ""}
                  />
                </div>

                <div>
                  <SimpleSelect label="Horário" required />
                </div>
              </S.GridAtendece>
            </S.FormAtendence>

            <Text className="textService">
              Escolha qual <span className="textStrong">serviço</span> você
              deseja realizar.
            </Text>

            <SwitchOptions
              optionA={{
                label: "1° Emplacamento",
                value: OpcoesServicosEnum.EMPLACAMENTO,
              }}
              optionB={{
                label: "Vistoria",
                value: OpcoesServicosEnum.VISTORIA,
              }}
              className="optionAtendance"
              handleOnChange={(v) => setTipoServico(OpcoesServicosEnum[v])}
            />

            {tipoServico === OpcoesServicosEnum.EMPLACAMENTO ? (
              <S.FormService>
                <S.GridLicense>
                  <div>
                    <Input label="Chassi" required />
                  </div>
                  <div>
                    <Button>Buscar</Button>
                  </div>
                </S.GridLicense>
              </S.FormService>
            ) : (
              <S.FormService>
                <S.GridSurvey>
                  <div>
                    <Input label="Placa" required />
                  </div>
                  <div>
                    <Input label="Renavam" required />
                  </div>
                  <div>
                    <Button>Buscar</Button>
                  </div>
                </S.GridSurvey>
              </S.FormService>
            )}

            <Title>Informações do Veículo</Title>

            <S.FormVeihecle>
              <S.GridVeihecle>
                <div>
                  <Input label="Modelo do carro" readOnly />
                </div>
                <div>
                  <Input label="Ano" readOnly />
                </div>
                <div>
                  <Input label="Placa" readOnly />
                </div>
                <div>
                  <Input label="Renavam" readOnly />
                </div>
                <div>
                  <Input label="Tipo de Veículo" readOnly />
                </div>
                <div>
                  <Input label="Chassi" readOnly />
                </div>
              </S.GridVeihecle>
            </S.FormVeihecle>

            <SwitchOptions
              IconA="/assets/svgs/pix-dark.svg"
              IconB="/assets/svgs/boleto-dark.svg"
              optionA={{
                label: "Pix",
                value: FormaPagamentoEnum.PIX,
              }}
              optionB={{
                label: "Boleto",
                value: FormaPagamentoEnum.BOLETO,
              }}
              className="paymentSwitch"
              handleOnChange={(v) => setTipoPagamento(FormaPagamentoEnum[v])}
            />

            <Button className="finalButton">Salvar</Button>
          </>
        )}
      </S.Container>
    </LayoutTemplate>
  );
};
