import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { WebsocketModule } from './example/websocket/websocket.module';
import { RestModule } from './example/rest/rest.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [WebsocketModule, RestModule],
  controllers: [AppController, CatsController, AdminController, AccountController],
  providers: [AppService, CatsService],
})
export class AppModule {}
