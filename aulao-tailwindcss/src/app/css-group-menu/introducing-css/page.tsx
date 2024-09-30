import TemplatePagina from "@/components/template/TemplatePagina"
import Titulo from "@/components/template/Titulo"

export default function PaginaIntroducingCSS() {
  return (
    <TemplatePagina className="flex flex-col gap-7">
      <Titulo texto="Usando padding" descricao="Padding em todas as direções" />
      <div className="inline-block bg-blue-500 p-7">Conteúdo</div>
    </TemplatePagina>
  )
}
