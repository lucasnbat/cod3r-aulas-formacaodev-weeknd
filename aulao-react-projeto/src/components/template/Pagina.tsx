import Cabecalho from './Cabecalho'
import Menu from './Menu'
import Rodape from './Rodape'

interface PaginaProps {
  children: React.ReactNode
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <main>{children}</main>
      <Rodape />
    </div>
  )
}
