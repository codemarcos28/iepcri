import { TestBed } from '@angular/core/testing';

import { ServicioCongregacionesService } from './servicio-congregaciones.service';

describe('ServicioCongregacionesService', () => {
  let service: ServicioCongregacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCongregacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
