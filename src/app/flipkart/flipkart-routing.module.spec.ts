import { FlipkartRoutingModule } from './flipkart-routing.module';

describe('FlipkartRoutingModule', () => {
  let flipkartRoutingModule: FlipkartRoutingModule;

  beforeEach(() => {
    flipkartRoutingModule = new FlipkartRoutingModule();
  });

  it('should create an instance', () => {
    expect(flipkartRoutingModule).toBeTruthy();
  });
});
