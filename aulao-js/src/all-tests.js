// console.log(123);
// console.log(15.5); // number
// console.log('Olá, mundo!') // string
// console.log(true); // boolean
// ---------------------------------------------------------
// const x = 10;
// x = x + 10; // proibido
// console.log(x)
// ---------------------------------------------------------
// let z = 10;
// console.log(++z) // soma antes e printa no console
// console.log(z++) // printa no console e soma depois
// console.log(z)
// ---------------------------------------------------------
// XOR
// const usandoCalca = true;
// const usandoBermuda = false;
// const vestidoCorretamente = usandoCalca !== usandoBermuda;
// console.log('Estou vestido corretamente?', vestidoCorretamente)
// ---------------------------------------------------------
// let number = 1;
// while (number <= 5) {
//     console.log(`Código executando pela ${number}ª vez`)
//     number += 1;
// }
// console.log('Fim')
// ---------------------------------------------------------
// Laços com for iterando em vetor
// const pedidos = [
//     { id: 0, status: 'pendente' },
//     { id: 1, status: 'cancelado' },
//     { id: 2, status: 'em entrega' },
//     { id: 3, status: 'pendente' },
//     { id: 4, status: 'entregue' },
// ]
// ---------------------------------------------------------
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
// ---------------------------------------------------------
// versão com for of
// const pedidos = [
//     { id: 0, status: 'pendente' },
//     { id: 1, status: 'cancelado' },
//     { id: 2, status: 'em entrega' },
//     { id: 3, status: 'pendente' },
//     { id: 4, status: 'entregue' },
// ]
// for (const pedido of pedidos) {
//     if (pedido.status == 'pendente') {
//         console.log(`Pedido ${pedido.id} aguardando pagamento`)
//     } else if (pedido.status == 'em entrega') {
//         console.log(`Pedido ${pedido.id} em entrega`)
//     } else {
//         console.log(`Pedido ${pedido.id} noutro status`)
//     }
// }
// ---------------------------------------------------------
// function saudacao(nome){
//     console.log(`Olá, ${nome}!`)
// }
// saudacao('risadinha'); // invocando
// ---------------------------------------------------------
// function contarVogais(texto) {
//     const vogais = 'aeiouAEIOU';
//     let contador = 0;
//     for (const letra of texto){
//         if (vogais.includes(letra)){
//             contador++
//         }
//     }
//     return contador;
// }
// console.log(contarVogais('aeiou'))
// ---------------------------------------------------------
// function somarTodos(...numeros) {
//     let total = 0;
//     for (let n of numeros) {
//         total += n;
//     }
//     return total;
// }
// console.log(somarTodos(1,2,4,5,6,7,5))
// ---------------------------------------------------------
// let somar = function (a,b) {
//     return a + b;
// }
// console.log(somar(2,4))
// ---------------------------------------------------------
// const somarArrowSimplificada = (a, b) => a + b;
// console.log(somarArrowSimplificada(5,5));
// ---------------------------------------------------------
// const dobro = (arr) => arr.map((n) => n * 2)
// ---------------------------------------------------------
/**
 * Objeto é conjunto de chave-valor, não indexada;
 */
// const pessoa1 = {
//     nome: 'Ana',
//     idade: 28,
//     cidade: 'Rio de Janeiro'
// };
// pessoa1.nome = 'Maria';
// console.log(pessoa1);
// const pessoa2 = Object.freeze({
//     nome: 'Tchain',
//     idade: 28,
//     cidade: 'Rio'
// })
// pessoa2.cidade = 'São Paulo'
// console.log(pessoa2) // ignorou sua mudança (Object.freeze())
// console.log(JSON.stringify(pessoa2))
// ---------------------------------------------------------
// const bomDia = function (){
//     return 'Bom dia!'
// }
// const lista = [bomDia, 1, '3', {}]
// console.log(lista.length)
// console.log(lista[0]()) //executando a função
// ---------------------------------------------------------
// const frutas = ['maçã', 'banana', 'laranja']
// frutas.push('uva') // adiciona por ultimo
// console.log('pos push: ', frutas) 
// console.log('pop: ', frutas.pop()) // elimina ultimo
// console.log('pos pop:', frutas)
// frutas.unshift('manga') // adiciona no começo da fila
// console.log('pos unshift (manga): ', frutas)
// frutas.shift() // deleta primeiro da fila
// console.log('pos shift: ',frutas)
// ---------------------------------------------------------
// const frutas = ['maçã', 'banana', 'tomate', 'abacaxi']
// const index = frutas.indexOf('tomate')
// console.log(index)
// if (index !== -1) {
//     // apartir do index (contando ele), elimine um elemento
//     frutas.splice(index, 1) 
// }
// console.log(frutas)
// console.log(typeof frutas)
// ---------------------------------------------------------
// implementação manual do map
// function triplo(n){
//     return n* 3
// }
// const numeros = [1,2,3,4]
// const triplos =[]
// for (const numero of numeros){
//     triplos.push(triplo(numero))
// }
// console.log(triplos)
// const triplosComMap = numeros.map(triplo)
// console.log(triplosComMap)
// ---------------------------------------------------------
// const pessoas = [
//     { nomeCompleto: 'Lucas Silva' },
//     { nomeCompleto: 'Lucas Santos' },
//     { nomeCompleto: 'Marta Silva' },
//     { nomeCompleto: 'Matheus Silva' },
// ]
// const nomesSplitados = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' '))
// const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0])
// console.log('Primeiros nomes= ', primeirosNomes)
// console.log('Nomes splitados= ', nomesSplitados)
// ---------------------------------------------------------
// const produtos = [
//     {nome: 'camisa', preco: 50},
//     {nome: 'tenis', preco: 350},
//     {nome: 'boné', preco: 150},
//     {nome: 'calça', preco: 10},
// ]
// é algo como "se obedecer a condição do if, dá push no novo array filtrado"
// const maisBaratos = produtos.filter(produto => produto.preco < 100)
// console.log(maisBaratos)