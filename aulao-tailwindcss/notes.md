# Anotações

* Alguns princípios:
```vim
@tailwind base; /* zera o estilo padrão do browser (h1, h2, h3...) */
@tailwind components; /* junção de classes para montar partes inteiras da app */
@tailwind utilities; /* classes utilitárias (p-2, w-full...) */
```
* Exemplo de componentes:
```vim
@layer components {
  .botao {
    @apply bg-blue-500 text-white;
    @apply px-4 py-2 rounded;
  }
}
```
* Agora você pode usar ele diretamente:
```vim
import TemplatePagina from "@/components/template/TemplatePagina"

export default function Home() {
  return (
    <div>
      <TemplatePagina>
        <h1>Inicio</h1>
        <button className="botao">Salvar</button>
      </TemplatePagina>
    </div>
  )
}

```