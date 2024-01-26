import { Module } from '@nestjs/common';
import { AuthModule } from './modules/v1/authentication/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
