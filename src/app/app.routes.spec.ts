import { routes } from './app.routes';

describe('app routes', () => {
  it('should export an array of routes', () => {
    expect(Array.isArray(routes)).toBeTrue();
  });
});
