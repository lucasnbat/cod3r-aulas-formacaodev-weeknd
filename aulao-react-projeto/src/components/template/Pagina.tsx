import Cabecalho from './Cabecalho'
import Menu from './Menu'
import Rodape from './Rodape'

interface PaginaProps {
  children: React.ReactNode
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      <div className="flex-1 flex">
        <Menu />
        <main className="p-8">{children}</main>
      </div>
      <Rodape />
    </div>
  )
}
