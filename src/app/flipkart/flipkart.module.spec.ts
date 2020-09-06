import { FlipkartModule } from './flipkart.module';

describe('FlipkartModule', () => {
  let flipkartModule: FlipkartModule;

  beforeEach(() => {
    flipkartModule = new FlipkartModule();
  });

  it('should create an instance', () => {
    expect(flipkartModule).toBeTruthy();
  });
});
