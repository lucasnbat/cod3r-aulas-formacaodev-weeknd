import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable() // indica que ele pode ser injetado em outra classe para ser usado la
export class CacheProvider implements OnModuleDestroy {
    private readonly db: Redis

    // abre conexão
    constructor() {
        this.db = new Redis({
            host: process.env.REDIS_HOST,
            port: +process.env.REDIS_PORT,
        })
    }

    async salvarPorId(tipo: string, id: number, valor: any): Promise<void> {
        await this.db.set(`${tipo}:${id}`, JSON.stringify(valor))
        await this.atualizarIds(tipo, id)
    }

    async salvar(chave: string, valor: any): Promise<void> {
        await this.db.set(chave, JSON.stringify(valor))
    }

    async obterPorId(tipo: string, id: number): Promise<any> {
        const valor = await this.db.get(`${tipo}:${id}`)
        return JSON.parse(valor)
    }

    async obter(chave: string): Promise<any> {
        const valor = await this.db.get(chave)
        return JSON.parse(valor)
    }

    async obterTodos(tipo: string): Promise<any[]> {
        const ids = await this.db.get(tipo);
        const idsArray = ids ? JSON.parse(ids) : []

        const valores = await Promise.all(
            idsArray.map(async (id: number) => {
                const valor = await this.obterPorId(tipo, id)
                return valor;
            })
        )

        return valores;
    }

    private async atualizarIds(tipo: string, id: number): Promise<void> {
        const ids = await this.db.get(tipo)

        const idsArray = ids ? JSON.parse(ids) : []

        if (idsArray.includes(id)) return // se o id já existe, para execução

        idsArray.push(+id) // se não existe, adiciona o id
        idsArray.sort() // ordena o array

        // escreve novamente a chave (tipo) com os valores atualizados
        await this.db.set(tipo, JSON.stringify(idsArray))
    }

    // quando módulo é destruido, fecha conexão
    onModuleDestroy() {
        this.db.disconnect()
    }
}
