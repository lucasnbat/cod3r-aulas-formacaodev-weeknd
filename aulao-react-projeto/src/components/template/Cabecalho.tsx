import { IconBrandReact } from '@tabler/icons-react'

export default function Cabecalho() {
  return (
    <header className="bg-zinc-700 p-6 flex justify-between px-6 py-3">
      <span>
        <div className="flex gap-2 items-center">
          <IconBrandReact size={36} stroke={1} className="text-blue-500" />
          <span className="font-black">React Essencial</span>
        </div>
      </span>
      <div className="flex gap-2 items-center">
        <span className="rounded-full bg-green-500 w-3 h-3" />
        <span>USER</span>
      </div>
    </header>
  )
}
