'use client'

import useFormularioUsuario from '@/hooks/useFormularioUsuario'

export default function Formulario() {
  const { email, nome, salvar, senha, setEmail, setNome, setSenha } =
    useFormularioUsuario()
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        className="border bg-zinc-800 p-2 rounded-md outline-none"
        size={80}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="informe o nome"
      />
      <input
        type="email"
        className="border bg-zinc-800 p-2 rounded-md outline-none"
        size={80}
        placeholder="informe o email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="border bg-zinc-800 p-2 rounded-md outline-none"
        size={80}
        placeholder="informe a senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button
        type="submit"
        onClick={salvar}
        className="bg-green-600 rounded-md p-2"
      >
        Salvar
      </button>

      <div className="flex-col gap-4">
        <div>{nome}</div>
        <div>{email}</div>
        <div>{senha}</div>
      </div>
    </div>
  )
}
