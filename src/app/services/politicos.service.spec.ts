import { TestBed } from '@angular/core/testing';

import { PoliticosService } from './politicos.service';

describe('PoliticosService', () => {
  let service: PoliticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
