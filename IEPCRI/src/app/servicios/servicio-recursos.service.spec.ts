import { TestBed } from '@angular/core/testing';

import { ServicioRecursosService } from './servicio-recursos.service';

describe('ServicioRecursosService', () => {
  let service: ServicioRecursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRecursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
