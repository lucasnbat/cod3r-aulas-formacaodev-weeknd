import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';

// @ = decorator para adicionar funcionalidades
@Module({
  imports: [ProdutoModule, ConfigModule.forRoot(), DbModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
