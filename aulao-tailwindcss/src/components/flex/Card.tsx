import { IconJewishStarFilled, IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

export default function Card() {
  return (
    <div className="flex flex-col gap-4 bg-zinc-800 w-96 p-4 rounded-md">
      <div className="w-full h-64 relative">
        <div className="absolute z-50 px-2 py-0.5 bg-black rounded-full text-xs top-2 left-2">
          39% off
        </div>
        <Image
          src="https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-branco-rose-feminino-court-vison-lo-76653/299727-1.jpg?w=670&h=670&v=no-change&qs=ignore"
          alt="tenis"
          className="rounded-md object-cover"
          fill
        />
      </div>
      <div className="flex flex-col">
        <div className="text-lg">Nike Risos Air MAX</div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="line-through text-zinc-400 text-xl">R$299,00</span>
            <span className="font-bold text-sm">R$199,00</span>
          </div>
          <div className="flex gap-0.5">
            <IconJewishStarFilled size={18} className="text-yellow-300" />
            <IconJewishStarFilled size={18} className="text-yellow-300" />
            <IconJewishStarFilled size={18} className="text-yellow-300" />
            <IconJewishStarFilled size={18} className="text-yellow-300" />
            <IconJewishStarFilled size={18} className="text-yellow-300" />
          </div>
        </div>
        <button className="botao mt-4 flex justify-center items-center gap-2">
          <span>
            <IconShoppingCart />
          </span>
          <span>Comprar</span>
        </button>
      </div>
    </div>
  )
}
