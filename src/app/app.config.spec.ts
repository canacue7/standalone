import { appConfig } from './app.config';

describe('appConfig', () => {
  it('should be an object with providers', () => {
    expect(appConfig).toBeTruthy();
    expect(appConfig.providers).toBeDefined();
  });
});
