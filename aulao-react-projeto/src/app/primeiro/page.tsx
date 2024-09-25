import Botao from '@/components/Botao'

export default function PrimeiraPagina() {
  return (
    <div className="flex gap-2">
      <Botao label="Salvar" />
      <Botao label="Cancelar" />
    </div>
  )
}
