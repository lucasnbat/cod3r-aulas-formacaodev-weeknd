class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string | null;
    ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string | null = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
}

const usuarioLogado: Usuario = new Usuario(1, 'Jão', 'jao@teste.com', true);
// usuarioLogado.senha = 'askldf'
console.log(usuarioLogado)