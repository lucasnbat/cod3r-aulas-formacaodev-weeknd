interface Especificacoes {
    marca: string;
    modelo: string;
    placaDeVideo: string;
    memoria: string;
    processador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean // para adicionar novas especif.
}

let computador: Especificacoes = {
    armazenamento: '256GB',
    marca: 'lenovo',
    memoria: '8GB',
    modelo: 'thinkpad',
    placaDeVideo: 'nvdia',
    processador: 'i5',
    rj45: true, // adicionei
}

console.log(computador)