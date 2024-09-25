import Botao from '@/components/Botao'

export default function Home() {
  return (
    <div className="flex gap-2">
      {/* é como se você estivesse instanciando (new Botao()) */}
      <Botao label="Salvar" />
      <Botao label="Cancelar" />
    </div>
  )
}
