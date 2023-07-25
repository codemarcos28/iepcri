import { TestBed } from '@angular/core/testing';

import { ServiciosIglesiaService } from './servicios-iglesia.service';

describe('ServiciosIglesiaService', () => {
  let service: ServiciosIglesiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosIglesiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
