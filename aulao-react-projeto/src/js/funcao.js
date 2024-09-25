// função construtora para instanciar objetos com ela
// ela tem atributos e usa eles para construir os objetos
// você passa valores por meio das props
function Botao(props) {
    this.label = props?.label ?? 'OK'
}

const botao1 = new Botao()
const botao2 = new Botao({label: 'CANCEL'})
console.log(botao1.label)
console.log(botao2.label)