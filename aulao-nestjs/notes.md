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
## Controller

* 