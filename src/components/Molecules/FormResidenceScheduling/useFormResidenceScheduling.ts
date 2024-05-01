import React, { useState } from "react";
import { ISelectOptions } from "../../../types/inputs";
import { useForm } from "react-hook-form";

export const useFormResidenceScheduling = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const { handleSubmit } = useForm<any>({});

  return { cidadesOptions, handleSubmit };
};
