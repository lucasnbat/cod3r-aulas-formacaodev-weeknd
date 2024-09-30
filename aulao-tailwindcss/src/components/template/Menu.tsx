import MenuGrupo from "./MenuGrupo"
import MenuItem from "./MenuItem"

export interface MenuProps {
  className?: string
}

export default function Menu(props: MenuProps) {
  return (
    <aside className={` ${props.className ?? ""}`}>
      <nav className="flex flex-col gap-6">
        <MenuGrupo label="CSS">
          <MenuItem
            label="introducing"
            href="/css-group-menu/introducing-css"
          />
          <MenuItem
            label="advancing"
            href="/css-group-menu/advancing-css/card-sample"
          />
          <MenuItem label="finish" href="/finish" />
        </MenuGrupo>
        <MenuGrupo label="Grid">
          <MenuItem label="introducing" href="/introducing" />
          <MenuItem label="advancing" href="/advancing" />
          <MenuItem label="finish" href="/finish" />
        </MenuGrupo>
        <MenuGrupo label="FlexBox">
          <MenuItem label="introducing" href="/introducing" />
          <MenuItem label="advancing" href="/advancing" />
          <MenuItem label="finish" href="/finish" />
        </MenuGrupo>
        <MenuGrupo label="Display">
          <MenuItem label="introducing" href="/introducing" />
          <MenuItem label="advancing" href="/advancing" />
          <MenuItem label="finish" href="/finish" />
        </MenuGrupo>
      </nav>
    </aside>
  )
}
