import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { IAgendamentoDTO } from "../../../types/agendamento";
import { useParams } from "react-router-dom";
import { Agendamento } from "../../../services/Agendamento";

export const useDocDownload = () => {
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );
  const params = useParams();

  useEffect(() => {
    Agendamento.getById({ uuid: params?.id })
      .then(({ data }) => {
        setAgendamento(data);
      })
      .finally(() => {});
  }, [params]);

  useEffect(() => {
    if (agendamento?.uuid) return;

    setTimeout(() => {
      handleDownload();
    }, 1000);
  }, [agendamento]);

  function handleDownload() {
    const input = document.getElementById("container");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save("recibo.pdf");
    });
    // .finally(() => {
    //   window.close();
    // });
  }

  return { agendamento };
};
