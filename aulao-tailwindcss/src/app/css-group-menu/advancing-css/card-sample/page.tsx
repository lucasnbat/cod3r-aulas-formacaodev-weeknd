import Card from "@/components/flex/Card"
import TemplatePagina from "@/components/template/TemplatePagina"
import Titulo from "@/components/template/Titulo"

export default function PaginaCardSample() {
  return (
    <TemplatePagina className="flex flex-col gap-7">
      <Titulo
        texto="Card com FlexBox"
        descricao="Exemplo de uso prático de FlexBox"
      />
      <div>
        <Card />
      </div>
    </TemplatePagina>
  )
}
