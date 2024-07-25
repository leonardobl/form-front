import { Button } from "../../Atoms/Button";
import { Eye } from "../../Atoms/Eye";
import { Pagination } from "../../Atoms/Pagination";
import * as S from "./styles";
import { useAdminStores } from "./useAdminStores";

export const AdminStoresTemplate = () => {
  const { isMobile, navigate, lojas, pagination, setNumberPage } =
    useAdminStores();
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

        {lojas?.length > 0 && (
          <S.TableItems>
            {lojas.map((l) =>
              isMobile ? (
                <S.TableItemMobile>
                  <div>
                    <p>{l?.nome}</p>
                    <span>ativo</span>
                  </div>
                  <div>
                    <Eye
                      onClick={() =>
                        navigate(`/configuracoes/lojas/detalhe?id=${l.uuid}`)
                      }
                    />
                  </div>
                </S.TableItemMobile>
              ) : (
                <S.TableItem>
                  <p>{l?.nome}</p>
                  <p>{l?.endereco?.cidade}</p>
                  <p>INATIVO</p>
                  <div>
                    <Eye
                      onClick={() =>
                        navigate(`/configuracoes/lojas/detalhe?id=${l.uuid}`)
                      }
                    />
                  </div>
                </S.TableItem>
              )
            )}
          </S.TableItems>
        )}
      </S.Table>

      {lojas.length > 0 && (
        <Pagination
          maxPageNumbersDisplayed={isMobile ? 3 : 10}
          key={`${Math.random()} - ${pagination}`}
          totalPage={pagination.totalPage}
          totalRegister={pagination.totalPage}
          actualPage={pagination.actualPage}
          setNumberPage={setNumberPage}
        />
      )}
    </S.Container>
  );
};
