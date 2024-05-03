import React, { ComponentProps } from "react";
import * as S from "./styles";
import { InputRHF } from "../../Atoms/InputsRHF/InputRHF";
import { SimpleSelectRHF } from "../../Atoms/SelectsRHF/SimpleSelectRHF";
import { Button } from "../../Atoms/Button";
import { useFormUserRegister } from "./useFormUserRegister";
import { IClienteForm } from "../../../types/cliente";
import { ISelectOptions } from "../../../types/inputs";
import { MessageErroForm } from "../../Atoms/MessageErroForm";

interface IFormUserRegister extends ComponentProps<"form"> {
  onSubmitForm: (data: IClienteForm) => void;
}

export const FormUserRegister = ({
  onSubmitForm,
  ...rest
}: IFormUserRegister) => {
  const {
    handleSubmit,
    cidadesOptions,
    ufOptions,
    handleCep,
    Controller,
    control,
    register,
    errors,
  } = useFormUserRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <InputRHF
          {...register("nome")}
          label="Nome Completo"
          required
          id="nome"
        />

        {errors?.nome?.message && (
          <MessageErroForm>{errors?.nome?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF {...register("email")} label="E-mail" id="email" />
        {errors?.email?.message && (
          <MessageErroForm>{errors?.email?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          {...register("telefone")}
          label="Telefone"
          maxLength={15}
          id="telefone"
        />
        {errors?.telefone?.message && (
          <MessageErroForm>{errors?.telefone?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          {...register("cpfCnpj")}
          label="CPF/CNPJ"
          required
          id="cpf"
          maxLength={18}
        />

        {errors?.cpfCnpj?.message && (
          <MessageErroForm>{errors?.cpfCnpj?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          {...register("endereco.cep")}
          required
          label="Cep"
          id="cep"
          maxLength={9}
          onBlur={handleCep}
        />

        {errors?.endereco?.cep?.message && (
          <MessageErroForm>{errors.endereco.cep.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          {...register("endereco.logradouro")}
          label="Endereço (Rua)"
          required
        />

        {errors?.endereco?.logradouro?.message && (
          <MessageErroForm>
            {errors?.endereco?.logradouro?.message}
          </MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          {...register("endereco.numero")}
          label="Número"
          required
          type="number"
        />
        {errors?.endereco?.numero?.message && (
          <MessageErroForm>{errors?.endereco?.numero?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF {...register("endereco.complemento")} label="Complemento" />
        {errors?.endereco?.complemento?.message && (
          <MessageErroForm>
            {errors?.endereco?.complemento?.message}
          </MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF {...register("endereco.bairro")} label="Bairro" required />
        {errors?.endereco?.bairro?.message && (
          <MessageErroForm>{errors?.endereco?.bairro?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <Controller
          control={control}
          name={"endereco.uf"}
          render={({ field: { value, onChange } }) => (
            <SimpleSelectRHF
              label="UF"
              required
              key={`${Math.random()}`}
              options={ufOptions}
              value={ufOptions.find((_) => _.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e.value)}
            />
          )}
        />
        {errors?.endereco?.uf?.message && (
          <MessageErroForm>{errors?.endereco?.uf?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <Controller
          control={control}
          name={"endereco.cidade"}
          render={({ field: { value, onChange } }) => (
            <SimpleSelectRHF
              label="Cidade"
              required
              key={`${Math.random()}`}
              options={cidadesOptions}
              value={cidadesOptions.find((_) => _.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e.value)}
            />
          )}
        />

        {errors?.endereco?.cidade?.message && (
          <MessageErroForm>{errors?.endereco?.cidade?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          label="Senha"
          required
          type="password"
          // ref={inpSenhaRef}
          // value={form?.senha}
          // onChange={(e) => {
          //   setForm((prev) => ({ ...prev, senha: e.target.value }));
          //   checkPass && checkPass();
          // }}
        />
        {errors?.senha?.message && (
          <MessageErroForm>{errors?.senha?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <InputRHF
          type="password"
          label="Confirmar Senha"
          required
          // ref={inpConfirSenha}
          // onChange={(e) => checkPass && checkPass()}
        />
        {errors?.confirmSenha?.message && (
          <MessageErroForm>{errors?.confirmSenha?.message}</MessageErroForm>
        )}
      </div>

      <div>
        <Button>Cadastrar</Button>
      </div>
    </S.Form>
  );
};
