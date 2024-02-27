import React, { useState } from "react";
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
  const getValues = async (txt: string) => {
    return options.filter((item) =>
      item.label.toLowerCase().includes(txt.toLowerCase())
    );
  };

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
          <S.GridModal>
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

        <S.WrapperSearch>
          <div>
            <AsyncSimpleSelect
              variant="search"
              placeholder=""
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
              options={options}
              components={{ Option: IconOption }}
            />
          </div>
          <div>
            <Button>Buscar</Button>
          </div>
        </S.WrapperSearch>
      </S.Container>
    </LayoutTemplate>
  );
};
