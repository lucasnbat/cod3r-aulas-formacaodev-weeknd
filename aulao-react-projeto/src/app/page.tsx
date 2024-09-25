import Pagina from '@/components/template/Pagina'

export default function Home() {
  return (
    <div className="flex gap-2 flex-col">
      <Pagina>
        <div className="flex">
          <h1>Bem vindo!</h1>
        </div>
      </Pagina>
    </div>
  )
}

// {/* é como se você estivesse instanciando (new Botao()) */}
// {/* <Botao label="Salvar" /> */}
// <Link href="/primeiro">Primeira página</Link>
// <Link href="/contador">Segunda página</Link>
