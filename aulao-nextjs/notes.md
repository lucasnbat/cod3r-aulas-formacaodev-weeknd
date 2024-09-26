# Anotações 

- `pnpm i @tabler/icons-react` 
- `pnpm i react-loading-skeleton`
- Sempre que colocar `nomeDeNovaPasta/page.tsx` ele mapeia nova rota;
- no `globals.css`:
```vim
@layer components {
  .botao {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded-md;
  }
}
```
- As configurações acima criam uma classe botão que pode ser usada assim:
```vim
<a className="botao"></a>
```
- veja como fica:
![alt text](image.png)
- o `layout.tsx` contém um layout particular para os arquivos da rota 
  `app/layout/` 
