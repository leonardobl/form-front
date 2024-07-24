import { Button } from "../../Atoms/Button";
import { Eye } from "../../Atoms/Eye";
import { Pagination } from "../../Atoms/Pagination";
import * as S from "./styles";
import { useAdminStores } from "./useAdminStores";

export const AdminStoresTemplate = () => {
  const { isMobile, navigate } = useAdminStores();
  return (
    <S.Container>
      <h2>Lojas Cadastradas</h2>

      <S.Table>
        <S.TableHeader>
          <h3>Nome</h3>
          <h3>Cidade</h3>
          <h3>Status</h3>
          <Button
            data-variant-outline
            onClick={() => navigate("/configuracoes/lojas/cadastro")}
          >
            <img src="/assets/svgs/icon-plus.svg" alt="icone plus" />
            Cadastrar
          </Button>
        </S.TableHeader>

        <S.TableItems>
          {isMobile ? (
            <>
              <S.TableItemMobile>
                <div>
                  <p>Nome</p>
                  <span>ativo</span>
                </div>
                <div>
                  <Eye />
                </div>
              </S.TableItemMobile>

              <S.TableItemMobile>
                <div>
                  <p>Nome</p>
                  <span>ativo</span>
                </div>
                <div>
                  <Eye />
                </div>
              </S.TableItemMobile>

              <S.TableItemMobile>
                <div>
                  <p>Nome</p>
                  <span>ativo</span>
                </div>
                <div>
                  <Eye />
                </div>
              </S.TableItemMobile>

              <S.TableItemMobile>
                <div>
                  <p>Nome</p>
                  <span>ativo</span>
                </div>
                <div>
                  <Eye />
                </div>
              </S.TableItemMobile>
            </>
          ) : (
            <>
              <S.TableItem>
                <p>Camilla santos de alcantara</p>
                <p>SAÕ LUÍS</p>
                <p>INATIVO</p>
                <div>
                  <Eye />
                </div>
              </S.TableItem>

              <S.TableItem>
                <p>Camilla santos de alcantara</p>
                <p>SAÕ LUÍS</p>
                <p>ATIVO</p>
                <div>
                  <Eye />
                </div>
              </S.TableItem>

              <S.TableItem>
                <p>Camilla santos de alcantara</p>
                <p>SAÕ LUÍS</p>
                <p>INATIVO</p>
                <div>
                  <Eye />
                </div>
              </S.TableItem>

              <S.TableItem>
                <p>Camilla santos de alcantara</p>
                <p>SAÕ LUÍS</p>
                <p>ATIVO</p>
                <div>
                  <Eye />
                </div>
              </S.TableItem>
            </>
          )}
        </S.TableItems>
      </S.Table>

      <Pagination
        totalPage={10}
        totalRegister={10}
        actualPage={1}
        maxPageNumbersDisplayed={isMobile ? 3 : 10}
        setNumberPage={undefined}
      />
    </S.Container>
  );
};
