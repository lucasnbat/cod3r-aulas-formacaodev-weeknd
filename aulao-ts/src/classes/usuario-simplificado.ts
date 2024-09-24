class UsuarioSimplificado {
    // tirei daqui de cima
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly _email: string, // private ? vai precisar de um get e colocar _ antes para não dar choque com o nome do get
        readonly ativo: boolean,
        readonly senha: string | null = null
    ) {
        // tirei todos os "this." daqui debaixo
    }

    get email(): string {
        return this._email
    }
}

const usuarioSimplificadoLogado: UsuarioSimplificado = new UsuarioSimplificado(1, 'Jão', 'jao@teste.com', true);
// usuarioLogado.senha = 'askldf'
console.log(usuarioLogado)