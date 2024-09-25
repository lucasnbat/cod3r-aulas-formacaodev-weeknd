import Link from 'next/link'

interface MenuItemProps {
  icone?: any
  text: string
  href: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className='flex items-center gap-1 hover:bg-black/20'>
      {props.icone}
      <Link href={props.href}>{props.text}</Link>
    </div>
  )
}
