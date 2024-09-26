import ProdutoDetalhes from "@/components/produto/ProdutoDetalhes"
import obterProdutosPorId from "@/data/services/obterProdutosPorId"
import Link from "next/link"

export default async function PaginaProdutoPorId(props: any) {
  console.log(props)
  // transforma id capturado via parâmetro url de string para numero e chama função
  const produto = await obterProdutosPorId(+props.params.id)
  if (!produto) return <div>Produto não encontrado</div>
  return (
    <div className="flex flex-col gap-5">
      <ProdutoDetalhes produto={produto} />
      <Link
        href="/produtos"
        className="self-center bg-blue-500 py-2 px-4 rounded-md"
      >
        Voltar
      </Link>
    </div>
  )
}
