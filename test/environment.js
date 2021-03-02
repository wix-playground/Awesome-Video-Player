import testkit from '@wix/wix-bootstrap-testkit';
import configEmitter from '@wix/wix-config-emitter';

export const app = bootstrapServer();

export const beforeAndAfter = function () {
  before(() => emitConfigs());
  app.beforeAndAfter();
};

function emitConfigs() {
  return configEmitter({sourceFolders: ['./templates'], targetFolder: './target/configs'})
    .fn('static_url', 'com.wixpress.promote.wix-stack1', 'http://localhost:3200/')
    .emit();
}

function bootstrapServer() {
  return testkit.app('./index', {
    env: {
      PORT: 3100,
      MANAGEMENT_PORT: 3104,
      NEW_RELIC_LOG_LEVEL: 'warn',
      DEBUG: 'wix:*'
    }
  });
}
