import React from "react";
import * as S from "./styles";
import { Title } from "../../Atoms/Title";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Button } from "../../Atoms/Button";
import { useConcessionaire } from "./useConcessionaire";
import { maskPhone } from "../../../utils/masks";
import { ISelectOptions } from "../../../types/inputs";

export const ConcessionaireTemplate = () => {
  const {
    form,
    setForm,
    cidadesOptions,
    handleCep,
    handleSubmit,
    maskCnpj,
    ufOptions,
    maskCep,
  } = useConcessionaire();

  return (
    <S.Container>
      <Title>Cadastro Concessionária</Title>

      <S.Form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Nome"
            required
            value={form?.nome}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, nome: e.target.value }))
            }
          />
        </div>

        <div>
          <Input
            label="CNPJ"
            value={form.cpfCnpj}
            maxLength={18}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                cpfCnpj: maskCnpj(e.target.value),
              }))
            }
            required
          />
        </div>

        <div>
          <Input
            label="E-mail"
            required
            type="emails"
            value={form?.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div>
          <Input
            label="Telefone"
            required
            type="tel"
            maxLength={15}
            value={form?.telefone}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                telefone: maskPhone(e.target.value),
              }))
            }
          />
        </div>

        <div>
          <Input
            onBlur={handleCep}
            label="CEP"
            required
            maxLength={9}
            value={form?.endereco?.cep}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, cep: maskCep(e.target.value) },
              }))
            }
          />
        </div>

        <div>
          <Input
            label="Endereço (Rua)"
            required
            value={form?.endereco?.logradouro}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, logradouro: e.target.value },
              }))
            }
          />
        </div>

        <div>
          <Input
            label="Número"
            required
            type="number"
            value={form?.endereco?.numero}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, numero: e.target.value },
              }))
            }
          />
        </div>

        <div>
          <Input
            label="Complemento"
            value={form?.endereco?.complemento}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, complemento: e.target.value },
              }))
            }
          />
        </div>

        <div>
          <Input
            label="Bairro"
            required
            value={form?.endereco?.bairro}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, bairro: e.target.value },
              }))
            }
          />
        </div>

        <div>
          <SimpleSelect
            label="UF"
            required
            options={ufOptions}
            value={ufOptions.find((item) => item.value === form?.endereco?.uf)}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, uf: e.value },
              }))
            }
          />
        </div>

        <div>
          <SimpleSelect
            label="Cidade"
            key={`${Math.random()}-${form?.endereco?.uf}`}
            required
            options={cidadesOptions}
            value={cidadesOptions.find(
              (item) => item.value === form?.endereco?.cidade
            )}
            onChange={(e: ISelectOptions) =>
              setForm((prev) => ({
                ...prev,
                endereco: { ...prev.endereco, cidade: e.value },
              }))
            }
          />
        </div>

        <div>
          <Button>Cadastrar</Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
