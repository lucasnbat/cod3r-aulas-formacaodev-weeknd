interface UsuarioComClasseEInterfaceProps {
    id: number
    nome: string
    _email: string
    ativo: boolean
    senha: string | null
}

class UsuarioComClasseEInterface {
    constructor(readonly props: UsuarioComClasseEInterfaceProps) {
    }
}

const UsuarioComClasseEInterfaceLogado = new UsuarioComClasseEInterface({
    id: 1,
    _email: 'thcin@gmail.com',
    ativo: true,
    nome: 'risos?',
    senha: 'hsdfjkshdfj'
});

console.log(usuarioLogado)