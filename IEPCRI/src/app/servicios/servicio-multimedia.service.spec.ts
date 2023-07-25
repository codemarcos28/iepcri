import { TestBed } from '@angular/core/testing';

import { ServicioMultimediaService } from './servicio-multimedia.service';

describe('ServicioMultimediaService', () => {
  let service: ServicioMultimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMultimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
