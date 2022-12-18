import { InMemoryNotificationsRepository } from '@test/repositorys/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('shoud be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notificaton!',
      category: 'social',
      recipientId: 'send-notification-test',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
