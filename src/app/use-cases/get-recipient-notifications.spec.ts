import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositorys/in-memory-notification-repository';
import { getRecipientNotification } from './get-recipient-notifications';

describe('Get recipient Notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const RecipientNotification = new getRecipientNotification(
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

    const { notifications } = await RecipientNotification.execute({
      recipientId: 'recipient-2',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-2' }),
        expect.objectContaining({ recipientId: 'recipient-2' }),
      ]),
    );
  });
});
