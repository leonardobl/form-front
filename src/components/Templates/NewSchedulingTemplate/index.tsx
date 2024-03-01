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
import { useNewScheduling } from "./useNewScheduling";
import {
  maskCep,
  maskCpf,
  removerCaracteresEspeciais,
} from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";

export const NewSchedulingTemplate = () => {
  const {
    formNewClient,
    handleCep,
    handleCpf,
    handlePhone,
    handleSubmitNewClient,
    setFormNewClient,
    options,
    cliente,
    getValues,
    modalIsOpen,
    setCliente,
    setModalIsOpen,
    setTipoAtendimento,
    setTipoPagamento,
    setTipoServico,
    tipoAtendimento,
    tipoPagamento,
    responseClient,
    tipoServico,
    isLoading,
    formAgendamento,
    setFormAgendamento,
    cidadesOptions,
    hasData,
    dateAgendamento,
    horariosOptions,
    setDateAgendamento,
    setHorariosOptions,
    diasIndisponiveis,
    ufOptions,
    formService,
    setFormSerice,
    selectOptions,
    tipoClienteOptions,
  } = useNewScheduling();

  // const { Option } = components;
  // const IconOption = (props) => (
  //   <Option {...props}>
  //     <S.WrapperValue>
  //       {props.data.label}
  //       <img src={"/assets/svgs/plus-round.svg"} alt={"icone adicionar"} />
  //     </S.WrapperValue>
  //   </Option>
  // );

  return (
    <LayoutTemplate>
      <MyModal
        onRequestClose={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
      >
        <S.FormModal onSubmit={handleSubmitNewClient}>
          <S.GridModal onSubmit={() => setCliente(true)}>
            <div>
              <Input
                variant="modal"
                label="Nome"
                required
                value={formNewClient?.nome}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    nome: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="CPF/CNPJ"
                required
                maxLength={18}
                value={formNewClient?.cpfCnpj}
                onChange={(e) => handleCpf(e.target.value)}
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="E-mail"
                type="email"
                value={formNewClient?.email}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="Telefone"
                value={formNewClient?.telefone}
                maxLength={15}
                onChange={(e) => handlePhone(e.target.value)}
              />
            </div>
            <div>
              <SimpleSelect
                variant="modal"
                label="Tipo"
                required
                options={tipoClienteOptions}
              />
            </div>
            <div>
              <Input
                variant="modal"
                required
                label="Cep"
                maxLength={9}
                onBlur={handleCep}
                value={formNewClient?.endereco?.cep}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      cep: maskCep(e.target.value),
                    },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Endereço (Rua)"
                required
                value={formNewClient?.endereco?.logradouro}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      logradouro: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <Input
                variant="modal"
                label="Numero"
                type="number"
                required
                value={formNewClient?.endereco?.numero}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      numero: e.target.value,
                    },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Bairro"
                required
                value={formNewClient?.endereco?.bairro}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: { ...prev.endereco, bairro: e.target.value },
                  }))
                }
              />
            </div>

            <div>
              <Input
                variant="modal"
                label="Complemento"
                value={formNewClient?.endereco?.complemento}
                onChange={(e) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      complemento: e.target.value,
                    },
                  }))
                }
              />
            </div>

            <div>
              <SimpleSelect
                variant="modal"
                label="UF"
                required
                key={`${Math.random()}`}
                value={ufOptions.find(
                  (_) => _.value === formNewClient?.endereco?.uf
                )}
                options={ufOptions}
                onChange={(e: ISelectOptions) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: { ...prev.endereco, uf: e.value },
                  }))
                }
              />
            </div>
            <div>
              <SimpleSelect
                variant="modal"
                label="Cidade"
                required
                key={`${Math.random()}`}
                value={cidadesOptions.find(
                  (_) => _.value === formNewClient?.endereco?.cidade
                )}
                options={cidadesOptions}
                onChange={(e: ISelectOptions) =>
                  setFormNewClient((prev) => ({
                    ...prev,
                    endereco: {
                      ...prev.endereco,
                      cidade: e?.value,
                    },
                  }))
                }
              />
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
                    alt={"icone de adicionar"}
                    onClick={() => setModalIsOpen(true)}
                  />
                </S.NotFoundvalue>
              )}
              loadOptions={getValues}
            />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.FormSearch>

        {hasData && (
          <>
            <S.FormUser>
              <S.GridUser>
                <div>
                  <Input label="Nome" readOnly value={responseClient?.nome} />
                </div>

                <div>
                  <Input
                    label="CPF/CNPJ"
                    readOnly
                    value={responseClient?.cpfCnpj}
                  />
                </div>

                <div>
                  <Input
                    label="Telefone"
                    readOnly
                    value={responseClient?.telefone}
                  />
                </div>

                <div>
                  <Input
                    label="E-mail"
                    readOnly
                    value={responseClient?.email}
                  />
                </div>

                <div>
                  <Input label="Tipo" readOnly value={responseClient?.tipo} />
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
                    value={
                      tipoAtendimento === TipoAtendimentoEnum.LOJA
                        ? selectOptions.find(
                            (item) => item.value === formAgendamento.uuidLoja
                          )
                        : selectOptions.find(
                            (item) =>
                              item.value === formAgendamento.uuidDelivery
                          )
                    }
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
                    isLoading={isLoading}
                    minDate={new Date()}
                    disabled={!!!formAgendamento?.uuidLoja}
                    excludeDates={diasIndisponiveis}
                    onChange={(e) => {
                      setDateAgendamento(e);
                    }}
                    placeholderText="__/__/__"
                    selected={dateAgendamento}
                  />
                </div>

                <div>
                  <SimpleSelect
                    label="Horário"
                    required
                    isDisabled={!dateAgendamento}
                    value={
                      horariosOptions?.find(
                        (item) => item.value === formAgendamento.horaAgendada
                      ) || null
                    }
                    onChange={(e: ISelectOptions) =>
                      setFormAgendamento((prev) => ({
                        ...prev,
                        horaAgendada: e?.value,
                      }))
                    }
                    options={horariosOptions}
                  />
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
                    <Input
                      label="Chassi"
                      required
                      value={formService.Chassi}
                      onChange={(e) =>
                        setFormSerice((prev) => ({
                          ...prev,
                          Chassi: e.target.value,
                        }))
                      }
                    />
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
                    <Input
                      label="Placa"
                      required
                      value={formService.Placa}
                      onChange={(e) => {
                        setFormSerice((prev) => ({
                          ...prev,
                          Placa: removerCaracteresEspeciais(e.target.value),
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="Renavam"
                      required
                      type="number"
                      value={formService.Renavam}
                      onChange={(e) =>
                        setFormSerice((prev) => ({
                          ...prev,
                          Renavam: e.target.value,
                        }))
                      }
                    />
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
              IconA="/assets/svgs/pix1.svg"
              IconB="/assets/svgs/codigoBarras1.svg"
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
