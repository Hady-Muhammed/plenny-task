import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('Service: Products', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
    });
  });

  it('should ...', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
