import { ComponentProps } from "react";
import * as S from "./styles";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Button } from "../../Atoms/Button";
import { useFormFilterItinerant } from "./useFormFilterItinerant";

interface IFormFilterItinerantProps extends ComponentProps<"form"> {}

export const FormFilterItinerant = (props: IFormFilterItinerantProps) => {
  const { unidades } = useFormFilterItinerant();

  return (
    <S.Form {...props}>
      <div>
        <SimpleSelect options={unidades} label="Unidade" />
      </div>
      <div>
        <SimpleSelect label="Cidade" />
      </div>
      <div>
        <InputDate
          placeholderText="___/___/___"
          label="Data de Realização"
          showIcon
          onChange={() => ""}
        />
      </div>

      <div>
        <Button data-variant-text type="button">
          Limpar tudo
        </Button>
        <Button>Buscar</Button>
      </div>
    </S.Form>
  );
};
