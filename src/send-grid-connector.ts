import * as SendGridMail from '@sendgrid/mail';
import * as assert from 'assert';

import { Callback, PromiseOrVoid } from './common';
import { IMailer, Mailer } from './mailer';

export class SendGridConnector {
  public mailer: typeof SendGridMail;
  protected DataAccessObject: IMailer;

  constructor(protected settings: any) {
    assert(
      typeof settings === 'object',
      'Cannot create connector without settings object'
    );
    assert(
      typeof settings.api_key === 'string',
      'Cannot create connector without API key. Please specify api_key'
    );

    SendGridMail.setApiKey(settings.api_key);
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
