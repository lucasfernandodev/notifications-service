import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(Notification: Notification): Promise<void>;
}
