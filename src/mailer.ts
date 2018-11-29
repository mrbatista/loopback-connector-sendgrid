import * as assert from 'assert';
import { Callback, PromiseOrVoid } from './common';

export interface IMailer {
  send(options: any): Promise<void>;
  sendMultiple(options: any): Promise<void>;
}

export class Mailer implements IMailer {
  static readonly dataSource: any;
  public static send: any;
  public static sendMultiple: any;
  public send: any;
  public sendMultiple: any;
}

Mailer.send = function(options: any, callback?: Callback): PromiseOrVoid {
  const dataSource = this.dataSource;
  const { connector } = dataSource;

  assert(connector, 'Cannot send mail without a connector!');
  return connector.send(options, undefined, callback);
};

Mailer.prototype.send = function(
  options: any,
  callback?: Callback
): PromiseOrVoid {
  return (this.constructor as typeof Mailer).send(options, undefined, callback);
};

Mailer.sendMultiple = function(
  options: any,
  callback?: Callback
): PromiseOrVoid {
  const dataSource = this.dataSource;
  const { connector } = dataSource;

  assert(connector, 'Cannot send mail without a connector!');
  return connector.sendMultiple(options, callback);
};

Mailer.prototype.sendMultiple = function(
  options: any,
  callback?: Callback
): PromiseOrVoid {
  return (this.constructor as typeof Mailer).sendMultiple(options, callback);
};
