import { Module } from '@nestjs/common';
import { CacheProvider } from './cache.provider';
import { IdService } from './id.service';

@Module({
  providers: [CacheProvider, IdService],
  exports: [CacheProvider, IdService], // exporta o cache.ts, seu provedor, para ser usado noutros arquivos
})
export class DbModule { }
