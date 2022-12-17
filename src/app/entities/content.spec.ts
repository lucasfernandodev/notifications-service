import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você recebey uma notifcação de amizade!');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification with less than 6 characteres', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Should not be able to create a notification with more than 240 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
