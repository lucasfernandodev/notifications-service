import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repository/notification-repository';

interface getRecipientNotificationRequest {
  recipientId: string;
}

interface getRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class getRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: getRecipientNotificationRequest,
  ): Promise<getRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
