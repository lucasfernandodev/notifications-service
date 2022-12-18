import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/use-cases/cancel-notification';
import { CountRecipientNotification } from '@app/use-cases/count-recipient-notifications';
import { ReadNotification } from '@app/use-cases/read-notification';
import { UnreadNotification } from '@app/use-cases/unread-notification';
import { getRecipientNotification } from '@app/use-cases/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    getRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
