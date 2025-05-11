## Projeto de Testes Automatizados
 
## Documentação
- Cypress (https://www.cypress.io/)

## Pre-requisitos
- Node.js

## Setup
- Cypress (npm install Cypress)

## Executar testes localmente
- npx cypress run --env allure=true --browser chrome
- allure generate allure-results --clean -o allure-report
- allure serve allure-results

## Como visualizar o report do Allure gerado pelo pipeline
- Acesse o pipeline e faça download da pasta allure-report/**' na aba 'Artifacts'
- Pelo terminal navegue até a pasta descompactada Ex: `cd C:/user/download/test`
- Execute o seguinte comando `npx http-server allure-report`
- No navegador acesse a seguinte url http://localhost:8080