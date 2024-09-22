// console.log(123);
// console.log(15.5); // number
// console.log('Olá, mundo!') // string
// console.log(true); // boolean

// const x = 10;
// x = x + 10; // proibido
// console.log(x)

// let z = 10;
// console.log(++z) // soma antes e printa no console
// console.log(z++) // printa no console e soma depois
// console.log(z)

// XOR
// const usandoCalca = true;
// const usandoBermuda = false;
// const vestidoCorretamente = usandoCalca !== usandoBermuda;
// console.log('Estou vestido corretamente?', vestidoCorretamente)

// let number = 1;
// while (number <= 5) {
//     console.log(`Código executando pela ${number}ª vez`)
//     number += 1;
// }
// console.log('Fim')

// Laços com for iterando em vetor
// const pedidos = [
//     { id: 0, status: 'pendente' },
//     { id: 1, status: 'cancelado' },
//     { id: 2, status: 'em entrega' },
//     { id: 3, status: 'pendente' },
//     { id: 4, status: 'entregue' },
// ]

// for (let i = 0; i < pedidos.length; i++) {
//     let pedido = pedidos[i]

//     if (pedido.status == 'pendente') {
//         console.log(`Pedido ${pedido.id} aguardando pagamento`)
//     } else if (pedido.status == 'em entrega') {
//         console.log(`Pedido ${pedido.id} em entrega`)
//     } else {
//         console.log(`Pedido ${pedido.id} noutro status`)
//     }
// }

// versão com for of
const pedidos = [
    { id: 0, status: 'pendente' },
    { id: 1, status: 'cancelado' },
    { id: 2, status: 'em entrega' },
    { id: 3, status: 'pendente' },
    { id: 4, status: 'entregue' },
]
for (const pedido of pedidos) {
    if (pedido.status == 'pendente') {
        console.log(`Pedido ${pedido.id} aguardando pagamento`)
    } else if (pedido.status == 'em entrega') {
        console.log(`Pedido ${pedido.id} em entrega`)
    } else {
        console.log(`Pedido ${pedido.id} noutro status`)
    }
}

