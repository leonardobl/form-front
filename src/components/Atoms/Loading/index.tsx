import * as S from "./styles";
import Load from "/assets/imgs/escudo.svg";

export function Loading() {
  return (
    <S.Wrapper>
      <S.WrapperImgs>
        {/* <S.ImgLogo src={"/assets/imgs/escudo.svg"} alt="logo" /> */}
        <S.ImgLoad src={"/assets/svgs/load.svg"} alt="Loagin" />
      </S.WrapperImgs>
      <span>Carregando...</span>
    </S.Wrapper>
  );
}
