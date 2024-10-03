# Nestjs

* Módulo é uma pasta com arquivo principal;
* Começando:
  ```powershell
  npm i -g @nestjs/cli
  nest new project-name
  ```
* para gerar algo você usa o `nest g`
* Comando para consultar: `nest --help`
* Vamos criar um modulo chamado produto:
  ```powershell
  nest g mo produto
  ```
* O módulo raiz da aplicação (que ela usa para carregar outros módulos) é o 
  `app.module.ts`;
* comando para criar controller em modo flat sem arquivos de teste (specs):
  ```powershell
  nest g co produto --flat --no-spec
  ```
## Config module (p/ acessar var ambiente)

* Offtopic: instalação do redis (banco de dados chave/valor):
  ```powershell
  npm i redis
  npm i ioredis
  ```

```powershell
 npm i @nestjs/config
```

* Adicione o `ConfigModule.forRoot()` no `app.module.ts`:
  ```vim
  @Module({
    imports: [ProdutoModule, ConfigModule.forRoot()],
    controllers: [],
    providers: [],
  })
  ```
* depois, crie um `.env` com as variáveis lá na raiz do projeto:
  ```vim
  REDIS_HOST=localhost
  REDIS_PORT=6379
  ```
## Configurando redis

* Tenha o `.env` conforme o tópico anterior;
* no terminal:
  ```powershell
  nest g mo db
  ```
* dentro da pasta `/src/db` execute:
  ```powershell
  PS C:\Users\lucas\OneDrive\Documentos\CursoWeb\Aulas\Cod3r\aulao-nestjs\src\db> nest g pr cache --flat --no-spec
  ```
## Criação de arquivos com `nest g`

  ```powershell
  nest g s --flat --no-spec # service
  nest g mo --flat --no-spec # modulo
  nest g pr --flat --no-spec # provider (injetable)
  nest g co --flat --no-spec # controller
  ```
* `--flat` faz criar na mesma pasta e `--no-spec` faz gerar sem arquivos de 
  testes;
