import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositorys/in-memory-notification-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient Notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipient = new CountRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-2',
      }),
    );

    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-2',
      }),
    );

    await notificationRepository.create(
      makeNotification({
        recipientId: 'recipient-1',
      }),
    );

    const { count } = await countRecipient.execute({
      recipientId: 'recipient-2',
    });

    expect(count).toEqual(2);
  });
});
