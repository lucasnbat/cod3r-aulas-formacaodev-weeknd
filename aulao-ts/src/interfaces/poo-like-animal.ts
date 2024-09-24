interface Animal {
    nome: string
    tipo: 'terrestre' | 'aquático'
    domestico: boolean
}

interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'risadinha',
    domestico: true,
    dono: 'Victor',
    tipo: 'terrestre'
}

console.log(cachorro)