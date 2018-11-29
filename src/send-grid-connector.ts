import * as SendGridMail from '@sendgrid/mail';
import * as assert from 'assert';

import { Callback, PromiseOrVoid } from './common';
import { IMailer, Mailer } from './mailer';

export class SendGridConnector {
  public mailer: typeof SendGridMail;
  protected DataAccessObject: IMailer;

  constructor(protected settings: any) {
    const apiKey = settings.apiKey || settings.api_key;
    assert(
      typeof settings === 'object',
      'Cannot create connector without settings object'
    );
    assert(
      typeof apiKey === 'string',
      'Cannot create connector without API key. Please specify api_key'
    );

    SendGridMail.setApiKey(apiKey);
    this.mailer = SendGridMail;
    this.DataAccessObject = Mailer;
  }

  public send(
    options: any,
    isMultiple = false,
    callback?: Callback
  ): PromiseOrVoid {
    return this.mailer.send(options, isMultiple, callback);
  }

  public sendMultiple(options: any, callback?: Callback): PromiseOrVoid {
    return this.mailer.sendMultiple(options, callback);
  }
}
