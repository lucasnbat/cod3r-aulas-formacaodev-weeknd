import Link from "next/link"

export interface MenuGrupoProps {
  label?: React.ReactNode
  href: string
  className?: string
}

export default function MenuItem(props: MenuGrupoProps) {
  return (
    <Link
      href={props.href}
      className={`flex py-1.5 hover:underline flex-col ${props.className ?? ""}`}
    >
      <span className="text-zinc-400 text-sm">{props.label}</span>
    </Link>
  )
}
