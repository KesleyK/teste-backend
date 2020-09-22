# Teste backend

```
Node v12.18.3
```

---

## Instruções para execução

Os passos a seguir devem ser executados na raiz do diretório.

### 1º passo:

Execute no terminal o comando `npm install` ou `yarn`.

### 2º passo:

Substitua no arquivo .env a variável de ambiente `MONGO_API_KEY_DEV` com sua respectiva `<mongo-key>`. Formato (mongo-key): `mongodb+srv://<usuario>:<senha>@cluster0.vyejz.mongodb.net/<db_name>?retryWrites=true&w=majority`.

### 3º passo:

Execute no terminal o comando `node app.js`.

---

## Arquitetura

- **./controllers:** conjunto de arquivos que representam as regras de negócio da aplicação. Ex.: o arquivo vehicleController compõe o CRUD completo da entidade veículo;

- **./environments:** representa o conjunto das variáveis de ambiente que estão disponíveis no arquivo .env. Importante para a segurança do projeto bem como, a reutilização de metadados ao longo da aplicação;

- **./error:** abstrações padronizadas para auxiliar no processo de tratamentos de erros;

- **./form-schemas:** conjunto de validações padronizadas para os tipos de formulário;

- **./middlewares:** conjunto de middlewares a serem executadas antes da chamada dos endpoints. Em tratamentos de erros, a middleware é executada após a chamada.

- **./models:** conjunto de esquemas que representam as entidades da aplicação;

- **./routes:** endpoints da aplicação;

- **app.js:** entry point.
