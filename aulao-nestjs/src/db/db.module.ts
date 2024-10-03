import { Module } from '@nestjs/common';
import { CacheProvider } from './cache.provider';

@Module({
  providers: [CacheProvider],
  exports: [CacheProvider], // exporta o cache.ts, seu provedor, para ser usado noutros arquivos
})
export class DbModule { }
