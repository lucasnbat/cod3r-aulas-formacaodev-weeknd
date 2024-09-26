import Link from "next/link"

export default function PaginaFilhaComLayout() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl gap-5">
      <h1>Contéudo página filha</h1>
      <div className="flex gap-5">
        <Link href="/layout" className="botao">
          Ir para página raiz
        </Link>
        <Link href="/" className="botao">
          Ir para inicio
        </Link>
      </div>
    </div>
  )
}
