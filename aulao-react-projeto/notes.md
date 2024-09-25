# Anotações

- Cada componente é como se fosse um arquivo `.ts` que funciona como função
  construtora;
- Ou seja, funções que criam objetos, instanciam objetos;
- Os componente React tem um principio parecido onde eles podem receber `props`
  para instanciar elementos `html` e `css`;
- Tudo que é colocado de pasta dentro de `app/` se torna rota (é o novo "pages");
- Aparentemente o arquivo raiz chamado no diretório `app/` é o `page.tsx`;
- Durante a construção do `Contador.tsx` esse erro ocorreu:
```vim
  If you need interactivity, consider converting part of this to a Client Component.
    at stringify (<anonymous>)
    at stringify (<anonymous>)
    at AsyncLocalStorage.run (node:async_hooks:346:14)
  digest: "3152320651"
```
- Para resolver, basta colocar `'use client'` no começo do componente;
