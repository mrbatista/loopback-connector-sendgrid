import * as juggler from 'loopback-datasource-juggler';

import { SendGridConnector } from '../src';

describe('SendGridConnector', () => {
  test('`api_key` is required', () => {
    expect(() => new SendGridConnector({})).toThrow(
      'Cannot create connector without API key. Please specify api_key'
    );
  });

  test('should have direct access to send grid client `mailer`', () => {
    const connector = new SendGridConnector({ api_key: 'fake_api_key' });
    expect(connector.mailer).toBeDefined();
  });

  test('Attach default methods to model', async () => {
    const ds = new juggler.DataSource({
      connector: SendGridConnector,
      name: 'send-grid',
      api_key: 'fake_api_key',
    });

    const Email = ds.createModel('EmailModel') as any;
    expect(Email.send).toBeDefined();
    expect(Email.sendMultiple).toBeDefined();

    const email = new Email();
    expect(email.send).toBeDefined();
    expect(email.sendMultiple).toBeDefined();
  });
});
