import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache.provider';
import Usuario from './usuario.entity';

@Controller('usuarios')
export class UsuarioController {
    // injeta dependencia do CacheProvider (nosso banco)
    constructor(private readonly cache: CacheProvider) { }

    @Get()
    async obterTodos() {
        return this.cache.obterTodos('usuario')
    }

    @Post()
    async salvar(@Body() usuario: Usuario): Promise<void> {
        return this.cache.salvar('usuario', usuario.id, { ...usuario, id: Math.random() })
    }
}
