import { useState } from 'react'

export default function useFormularioUsuario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function salvar() {
    console.log(nome)
    console.log(email)
    console.log(senha)
  }

  return {
    nome,
    email,
    senha,
    setNome,
    setEmail,
    setSenha,
    salvar,
  }
}
