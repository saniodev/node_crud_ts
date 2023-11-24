- Foi desenvolvido com `Node.js` e `ORM Prisma`.

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

### Criação das Tabelas do Banco de Dados
#### Rode o comando para criar as tabelas na raiz do projeto:

```javascript
  yarn migrate
```
#### ou

```javascript
  npm run migrate
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

