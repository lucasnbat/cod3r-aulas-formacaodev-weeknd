import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Rodape from "./Rodape"

interface TemplatePaginaProps {
  children?: ReactNode
}

export default function TemplatePagina(props: TemplatePaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho className="h-20" />
      <div className="flex flex-1 boxed">
        <Menu className="w-80" />
        <main className="flex-1 bg-yellow-500">{props.children}</main>
      </div>
      <Rodape className="h-14" />
    </div>
  )
}
