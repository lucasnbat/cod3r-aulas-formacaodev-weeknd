export interface CabecalhoProps {
  className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header className={`bg-green-400 ${props.className ?? ""}`}>
      Cabecalho
    </header>
  )
}
