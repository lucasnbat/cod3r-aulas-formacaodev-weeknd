import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

// @ = decorator para adicionar funcionalidades
@Module({
  imports: [ProdutoModule, ConfigModule.forRoot(), DbModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  // configuração do middleware
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
