import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Menu from "./Menu"
import Rodape from "./Rodape"

interface TemplatePaginaProps {
  children?: ReactNode
  className?: string
}

export default function TemplatePagina(props: TemplatePaginaProps) {
  return (
    <div className="flex flex-col min-h-screen px-7 lg:px-0">
      <Cabecalho className="h-20" />
      <div className="flex flex-1 boxed">
        <Menu className="hidden lg:block lg:w-64 xl:w-72 py-7" />
        <main className={`flex-1 py-7 ${props.className ?? ""}`}>
          {props.children}
        </main>
      </div>
      <Rodape className="h-14" />
    </div>
  )
}
