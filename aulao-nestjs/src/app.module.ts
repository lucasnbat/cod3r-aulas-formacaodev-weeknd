import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';

// @ = decorator para adicionar funcionalidades
@Module({
  imports: [ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
