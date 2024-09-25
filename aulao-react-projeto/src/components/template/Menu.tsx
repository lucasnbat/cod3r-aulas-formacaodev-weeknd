import { Icon123, IconForms, IconHome2, IconNumber1 } from '@tabler/icons-react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <aside className="bg-zinc-800 w-80 p-8">
      <nav className="flex flex-col gap-6">
        <MenuItem href="/" text="Inicio" icone={<IconHome2 />} />
        <MenuItem href="/primeiro" text="Primeiro" icone={<IconNumber1 />} />
        <MenuItem href="/contador" text="Contador" icone={<Icon123 />} />
        <MenuItem href="/formulario" text="Formulario" icone={<IconForms />} />
      </nav>
    </aside>
  )
}
