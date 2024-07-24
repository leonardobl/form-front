import { useState } from "react";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { InputTime } from "../../Atoms/Inputs/InputTime";
import * as S from "./styles";

export const AdminStoresRegisterTemplate = () => {
  const [time, setTime] = useState("");

  return (
    <S.Container>
      <div>AdminStoresRegisterTemplate</div>

      <br />

      <div style={{ width: "340px" }}>
        <InputTime
          time={time}
          onTimeChange={(e) => {
            setTime(`${e.hour}:${e.minute}`);
          }}
        />
      </div>
    </S.Container>
  );
};
