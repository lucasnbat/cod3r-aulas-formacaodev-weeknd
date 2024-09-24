interface Produto {
    id: string
    name: string
    description: string
    price: number
    image: string
}

const test_product: Partial<Produto> = {
    id: '43ds-dsf4',
    name: 'camisa',
}

// não vai dar erro ao compilar porque Partial faz todos atributos ficarem opcioanis
console.log(test_product) 
