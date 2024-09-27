export interface RodapeProps {
  className?: string
}

export default function Rodape(props: RodapeProps) {
  return <footer className={`bg-purple-500 ${props.className}`}>Rodape</footer>
}
