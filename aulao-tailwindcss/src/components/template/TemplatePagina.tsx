import { ReactNode } from "react"

interface TemplatePaginaProps {
  children?: ReactNode
}

export default function TemplatePagina(props: TemplatePaginaProps) {
  return <div>{props.children}</div>
}
