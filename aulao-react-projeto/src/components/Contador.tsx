'use client'
import { useState } from 'react'

interface ContadorProps {
  valorInicial?: number
}

export function Contador({ valorInicial }: ContadorProps) {
  // isso abaixo é como fazer [a,b,c] = [1,2,3]
  const [numero, setNumero] = useState(valorInicial ?? 0)
  // fazendo useState caseiro
  // const estado = useState(valorInicial ?? 0) // useState retorna vetor
  // const numero = estado[0] // primeira posição é o numero
  // const setNumero = estado[1] // segunda é a função que altera o número
  function decrementar() {
    setNumero(numero - 1)
    console.log(numero)
  }

  function incrementar() {
    setNumero(numero + 1)
    console.log(numero)
  }
  return (
    <div>
      <h1>Contador</h1>
      <span>{numero}</span>
      <div className="flex gap-2">
        <button onClick={decrementar} className="bg-red-500 p-2 rounded-sm">
          Decrementar
        </button>
        <button onClick={incrementar} className="bg-green-500 p-2 rounded-sm">
          Incrementar
        </button>
      </div>
    </div>
  )
}
