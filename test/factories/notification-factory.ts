import { Content } from '@app/entities/content';
import { Notification, notificationProps } from '@app/entities/notification';

type override = Partial<notificationProps>;

export function makeNotification(override: override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('is Notification should canceled'),
    recipientId: 'recipient-1',
    ...override,
  });
}
