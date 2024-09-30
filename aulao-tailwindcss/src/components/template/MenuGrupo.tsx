export interface MenuGrupoProps {
  children?: React.ReactNode
  className?: string
  label: string
}

export default function MenuGrupo(props: MenuGrupoProps) {
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      <span text-white font-semibold>
        {props.label}
      </span>
      <div>{props.children}</div>
    </div>
  )
}
