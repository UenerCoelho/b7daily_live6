# Sistema de Login

- Projeto de um sistema de login, administrado pelo @bonieky da b7web.com.br, como próprio nome ja diz, tem o objetivo de desenvolver um sistema de login em react.

## Mapa do Sistema de Login

### Para Validar o Acesso?

- 1. Saber que tem um usuário logado.
- 2. Se tiver, eu preciso Validar este User.
- 3. Se sim, libera o acesso.

### Para Realizar o Login:

- 1. Receber os Dados do Login.
- 2. Enviar uma requisição para o BackEnd validar estes dados no bando de dados.
- 3. Se estiver Correto, Salvar as referências do User no browser.
- 4. Se estiver errado, avisa que está errado.

### Para Realizar o Logout:

- 1. Apago a referência que existir no browser.
  - 1.1. Enviar uma requisição ao BackEnd avisando para destruir aquela referência.
- 2. Atualizo a página.
