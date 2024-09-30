export interface RodapeProps {
  className?: string
}

export default function Rodape(props: RodapeProps) {
  return (
    <footer
      className={`text-zinc-400 px-7 border-t border-zinc-800 ${props.className}`}
    >
      <div className="justify-end flex items-center boxed">
        Todos os direitos reservados &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}
