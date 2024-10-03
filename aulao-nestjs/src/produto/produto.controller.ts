import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
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

    @Get(':id')
    async obterProdutoPorId(@Param('id') id: string): Promise<Produto> {
        return produtos.find((produto) => produto.id === +id)
    }

    @Post()
    async criar(@Body() produto: Produto): Promise<void> {
        produtos.push({
            ...produto,
            id: produto.id ? produto.id : produtos.length + 1
        })
    }

    @Patch()
    async atualizar(@Body() produto: Partial<Produto>): Promise<void> {
        const index = produtos.findIndex((p) => p.id === +produto.id);
        produtos[index] = { ...produtos[index], ...produto };
    }

    @Delete(':id')
    async excluir(@Param('id') id: string): Promise<void> {
        const index = produtos.findIndex((p) => p.id === +id)
        produtos.splice(index, 1)
    }
}
