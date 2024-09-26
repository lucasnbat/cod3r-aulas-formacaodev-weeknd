import Produto from "@/data/model/Produto"
import Image from "next/image"
import Link from "next/link"

interface ProdutoItemProps {
  produto: Produto
}
export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props

  return (
    <Link
      href={`/produtos/${produto.id}`}
      className="flex gap-4 bg-zinc-900 rounded-md"
    >
      <div className="min-w-48 min-h-36 relative flex flex-col justify-center items-center">
        <Image
          src={produto.imagemUrl}
          alt={produto.nome}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <h2 className="text-2xl font-bold">{produto.nome}</h2>
        <p className="text-xs text-zinc-400">{produto.descricao}</p>
        <span className="text-lg">R$ {produto.preco}</span>
      </div>
    </Link>
  )
}
