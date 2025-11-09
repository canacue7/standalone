import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './products';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should call the API and return data', (done) => {
    const mockResp = { items: [{ id: 1, name: 'Goku' }] };
    service.getProducts().subscribe((res) => {
      expect(res).toEqual(mockResp);
      done();
    });

    const req = httpMock.expectOne('https://dragonball-api.com/api/characters');
    expect(req.request.method).toBe('GET');
    req.flush(mockResp);
  });
});
