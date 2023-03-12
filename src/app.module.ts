import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AdminController} from './admin/admin.controller';
import {AccountController} from './account/account.controller';
import {WebsocketModule} from './example/websocket/websocket.module';
import {RestModule} from './example/rest/rest.module';
import {CatsModule} from './cats/cats.module';
import {DatabaseModule} from './database/database.module';
import {User} from './users/entities/user.entity';

@Module({
  imports: [WebsocketModule, RestModule, CatsModule, DatabaseModule.forRoot([User])],
  exports: [DatabaseModule],
  controllers: [AppController, AdminController, AccountController],
  providers: [AppService],
})
export class AppModule {}
