'use server'
import { esperar } from './utils'
import produtos from '../constants/produtos'

export default async function obterProdutosPorId(id: number) {
  await esperar(3000)
  const produto = produtos.find((produto) => produto.id === id)
  return produto
}