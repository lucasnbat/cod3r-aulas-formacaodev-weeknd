/**
 * this = referencia classe atual
 * super = chama o construtor da classe pai/ superclasse
 */

export default abstract class Carro {
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
    ) { }

    get velocidade(): number {
        return this.velocidadeAtual;
    }

    acelerar(): number {
        const novaVelocidade = this.velocidadeAtual + this.aceleracao;
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        return this.velocidadeAtual;
    }
}

class Civic extends Carro {
    constructor() {
        super(230, 10, 5) // velocidadeMax 230, aceleracao 10, frenagem 5
    }
}

interface Esportivo {
    ligarTurbo(): void;
    desligarTurbo(): void;
}

// se implementa Eesportivo, significa que vai pegar e usar todos os metodos dele
class Ferrari extends Carro implements Esportivo {
    private turbo = false;

    constructor() {
        super(350, 20, 15) // inicializando sobrebondo valores padrão de Carro
    }
    ligarTurbo(): void {
        this.turbo = true;
    }
    desligarTurbo(): void {
        this.turbo = false;
    }
    // acredito que aqui é o acelerar() particular da ferrari
    acelerar(): number {
        if (this.turbo) {
            // que busca o metodo normal do carro
            // e acelera duas vezes
            super.acelerar()
            return super.acelerar()
        } else {
            return super.acelerar()
        }
    }
}

let meuCarro: Carro = new Civic()
meuCarro.acelerar()
meuCarro.acelerar()
meuCarro.acelerar()
console.log('Civic: ', meuCarro.velocidade)

let meuCarroEsportivo = new Ferrari()
meuCarroEsportivo.ligarTurbo()
meuCarroEsportivo.acelerar()
meuCarroEsportivo.acelerar()
meuCarroEsportivo.acelerar()

meuCarroEsportivo.frear()
console.log('Ferrari: ', meuCarroEsportivo.velocidade)