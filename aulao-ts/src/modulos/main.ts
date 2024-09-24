import { calcularDesconto, calcularTotal } from "./functions/calcularTotal";
import removerItensZerados from "./functions/removerItensZerados";
import { Carrinho } from "./model/Carrinho";

const carrinhoOriginal: Carrinho = {
    itens: [
        { nome: 'one', preco: 1.5, quantidade: 2 },
        { nome: 'two', preco: 2.5, quantidade: 0 },
        { nome: 'three', preco: 2.5, quantidade: 2 },
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0,
}

const carrinhoSemItensZerados = removerItensZerados(carrinhoOriginal);
const carrinhoComTotalCalculado = calcularTotal(carrinhoSemItensZerados)
const carrinhoComDescontoCalculado = calcularDesconto(carrinhoComTotalCalculado)
// console.log(carrinhoOriginal)
// console.log(carrinhoSemItensZerados)
console.log(carrinhoComTotalCalculado)
console.log(carrinhoComDescontoCalculado)
