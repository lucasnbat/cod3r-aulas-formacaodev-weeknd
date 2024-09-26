import Link from "next/link"

export default function PaginaComLayout() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl gap-5">
      <h1>Contéudo página raiz</h1>
      <Link href="/layout/filha" className="botao">
        Ir para página filha
      </Link>
    </div>
  )
}
