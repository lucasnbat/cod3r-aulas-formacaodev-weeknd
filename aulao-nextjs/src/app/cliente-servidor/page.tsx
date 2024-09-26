import Cliente from "@/components/cliente-servidor/Cliente"
import Servidor from "@/components/cliente-servidor/Servidor"
import Pagina from "@/components/template/Pagina"

export default function PaginaClienteServidor() {
  return (
    <Pagina>
      <div className="flex flex-col gap-10">
        <div>
          <h1>Client:</h1>
          <Cliente />
        </div>
        <div>
          <h1>Server:</h1>
          <Servidor />
        </div>
      </div>
    </Pagina>
  )
}
