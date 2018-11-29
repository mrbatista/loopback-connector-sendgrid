import { SendGridConnector } from './send-grid-connector';

export * from './send-grid-connector';

export function initialize(dataSource: any) {
  const connector = new SendGridConnector(dataSource.settings);
  dataSource.connector = connector;
  dataSource.connector.dataSource = dataSource;
}
