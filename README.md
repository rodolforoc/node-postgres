### API Node com TypeScript

Aplicação desenvolvida com Node.js junto ao [TypeScript](https://www.typescriptlang.org/), utilizando o conceito de models, repositories e services (Repository Pattern). Todos os dados da aplicação estão sendo armazenados em um banco de dados [Postgres](https://www.postgresql.org/) juntamente com o [Docker](https://docs.docker.com/).
Para facilitar a manipulação do banco de dados utilizamos o TypeORM e para realizar o envio de arquivos com o Multer.
- Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro, listagem, remoção e importação das transações via arquivo CSV.

## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [Jest](https://jestjs.io/)


### Rotas da aplicação

- **`POST /transactions`**: A rota recebe `title`, `value`, `type`, e `category` dentro do corpo da requisição, sendo o `type` o tipo da transação, que será `income` para entradas e `outcome` para saídas (retiradas).
- **`GET /transactions`**: A rota retorna uma listagem com todas as transações que você cadastrou até agora, junto com o valor da soma de entradas, retiradas e total de crédito disponível.
- **`DELETE /transactions/:id`**: A rota deleta uma transação com o `id` presente nos parâmetros da rota.
- **`POST /transactions/import`**: A rota permite a importação de um arquivo com formato `.csv` contendo as mesmas informações necessárias para criação de uma transação.
<hr>

<h4 align="center">
  ⚠️ Antes de rodar a aplicação, é necessário a criação de um banco de dados e atualize o arquivo <a href="https://github.com/rodolforoc/node-postgres/blob/master/ormconfig.json">ormconfig.json</a> com as informações do seu banco para que a aplicação execute corretamente ⚠️
</h4>

## Instalações e usos

Clone ou faça o download desse repositório:

```
# Clone o repositório
$ git clone https://github.com/rodolforoc/node-postgres
```

Dentro da pasta /node-postgres rode os seguintes comandos:

```
# Instale as dependencias
$ yarn

# Execute as migrations para o banco de dados
$ yarn typeorm migration:run

# Rode a API
$ yarn dev:server

# running on port 3333
```
