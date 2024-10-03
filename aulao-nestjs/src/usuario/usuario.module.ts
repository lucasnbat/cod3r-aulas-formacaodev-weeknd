import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule], // importando o modulo de bd para usar ele no mod. usuario
  controllers: [UsuarioController]
})
export class UsuarioModule { }
