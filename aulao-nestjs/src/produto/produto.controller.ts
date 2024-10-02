import { Controller, Get } from '@nestjs/common';
import Produto from './produto.entity';
import produtos from 'src/constants/produtos';

// visão geral: como faço um endpoint /produtos/ping

// url: /produtos
@Controller('produtos')
export class ProdutoController {

    // url: /ping
    @Get('ping')
    ping(): string {
        return 'pong'
    }

    // aqui não coloquei nada, então basta chamar '/produtos' e pronto
    @Get()
    async obterProdutos(): Promise<Produto[]> {
        return produtos;
    }
}
