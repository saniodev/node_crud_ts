# Microsserviço de Gerenciamento de Usuários em Node.js
### Configuração do Ambiente

- Certifique-se de ter o Node.js instalado em sua máquina.

Este projeto é um microsserviço de gerenciamento de usuários desenvolvido com Node.js e ORM Prisma. O objetivo principal é implementar operações CRUD (Create, Read, Update, Delete), seguindo as práticas de arquitetura limpa e Domain-Driven Design (DDD), além de incluir testes unitários para garantir a robustez do sistema.

## Stacks Utilizadas
| Tecnologia        | Descrição                                                  |
|-------------------|------------------------------------------------------------|
| Node.js e Express | Utilizados para criar o microsserviço.                     |
| ORM               | Prisma foi escolhido para interação com o banco de dados.   |

## Como Rodar o Projeto com Docker
#### Para executar o projeto usando Docker, siga os passos abaixo:

### Configuração do Arquivo .env
#### Certifique-se de configurar todas as variáveis de ambiente necessárias no arquivo .env.

### Instalação do Docker
#### Certifique-se de ter o Docker instalado em sua máquina.
#### Recomendamos o uso do Docker Desktop. [Download Docker](https://www.docker.com/products/docker-desktop/)

<details>
  <summary>
    <strong>🐳 Rodando no Docker Localmente</strong>
  </summary><br>

### Execução do Docker Compose
#### No terminal, execute o comando abaixo na raiz do projeto para iniciar os containers
#### definidos no arquivo docker-compose.yml:

> Rode o serviço `MYSQL` com o comando `docker compose up -d`.

```javascript
 docker-compose up -d
```

- Esse serviço irá inicializar um container chamado `api_crud_db`.
- A partir daqui você pode rodar o container `api_crud_db` via CLI ou via um editor de código de sua preferência. Ex: VSCode.
- Lembre-se de verificar se a sua porta 3000 e 3306:3306 não está ocupada.
- A aplicação estará disponível em `http://localhost:3000` e o MYSQL na porta 3306:3306.
- A flag `-d` roda o container em segundo plano.

- Você pode se conectar ao banco de dados e executar
- consultas, no entanto, não é recomendado fazê-lo diretamente pelo terminal. É mais apropriado
- utilizar uma IDE ou interface gráfica projetada para visualização de bancos do dados e manipular as tabelas.

- A versão local do seu node precisa ser a v18.17.1.

</details>

### Instalação de Dependências
#### Execute o comando para instalar as dependências do projeto. Isso é necessário antes de
#### iniciar o projeto:

```javascript
  yarn install
```
#### e depois e necesario consulta o a parte de como roda o projeto com docker

```javascript
 docker-compose up -d
```

### Criação das Tabelas do Banco de Dados
#### Rode o comando para criar as tabelas na raiz do projeto:

```javascript
  yarn migrate
```
#### ou

```javascript
  npm run migrate
```

#### e depois 

```javascript
  yarn dev
```

#### ou

```javascript
  npm install
```
#### e depois 

```javascript
  npm run dev
```

### Rodando Tests da Api
#### Rode o comando para execução de tests da aplicação, na raiz do projeto:


```javascript
  yarn test
```
#### ou

```javascript
  npm run test
```

#### Agora, o projeto está em execução usando Docker. Se quiser visualizar as tabelas, conecte-se
#### ao banco de dados MySQL com as credenciais fornecidas no arquivo .env usando um
#### cliente MySQL de sua escolha.

### Aproveite a API com o Swagger

### Agora, acesse a API usando o Swagger para visualizar e testar os endpoints disponíveis.

```javascript
  http://localhost:3000/swagger
```


## Rotas Principais

| Método | Rota                 | Middleware            | Controller                  | Descrição                                      |
|--------|----------------------|-----------------------|-----------------------------|------------------------------------------------|
| POST   | /create              | authName, authEmail, authPass | createUserController    | Cria um novo usuário                           |
| GET    | /list                | N/A                   | findAllUsersController     | Lista todos os usuários cadastrados             |
| PUT    | /update/:id          | authName, authEmail, authPass | updateUserController      | Atualiza as informações de um usuário específico |
| DELETE | /delete/:id          | N/A                   | deleteUserController      | Deleta um usuário pelo ID                      |

## Rotas Auxiliares

| Método | Rota       | Middleware | Controller | Descrição                              |
|--------|-------------|-------------|-------------|----------------------------------------|
| N/A    | /swagger    | N/A         | N/A         | Rota para visualizar a documentação Swagger |
| N/A    | /user       | N/A         | N/A         | Rota principal para as operações de usuário |


# Execução de Testes com Jest
Os testes unitários foram implementados utilizando o framework Jest. Esses testes garantem que as diferentes partes do microsserviço funcionem conforme o esperado, mantendo a robustez do sistema.

![image](https://github.com/LaiFrance/readme/assets/91226847/3b042319-c9e2-4bf5-8603-1d27dedaa698)

# Instruções para Execução

Após a instalação das dependências, os testes podem ser executados utilizando o seguinte comando:

```
yarn test
```
