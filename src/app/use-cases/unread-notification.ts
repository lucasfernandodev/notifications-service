import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repository/notification-repository';
import { NotificationNotFound } from './Errors/notification-not-found';

interface UnreadRequest {
  notificationId: string;
}

type UnreadResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(request: UnreadRequest): Promise<UnreadResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
