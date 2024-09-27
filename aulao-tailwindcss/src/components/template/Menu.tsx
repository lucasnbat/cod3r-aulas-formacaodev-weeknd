export interface MenuProps {
  className?: string
}

export default function Menu(props: MenuProps) {
  return (
    <aside className={`bg-blue-500 ${props.className ?? ""}`}>
      <nav>Menu</nav>
    </aside>
  )
}
