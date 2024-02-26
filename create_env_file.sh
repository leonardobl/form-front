if [ -d "./.env" ]; then rm -rf "./.env"; fi

touch .env

echo "REACT_APP_VIACEP_URL=$VIACEP_URL" >> .env
echo "REACT_APP_IBGE_API_URL=$IBGE_API_URL" >> .env
echo "REACT_APP_USUARIOS_API_URL=$USUARIOS_API_URL" >> .env
echo "REACT_APP_BRAVE_API_URL=$AGENDAMENTOS_API_URL" >> .env
echo "REACT_APP_BRAVE_CNPJ_ECV=$CNPJ_ECV" >> .env