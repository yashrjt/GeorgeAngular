import { TestBed } from '@angular/core/testing';

import { GetMusicService } from './get-music.service';

describe('GetMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMusicService = TestBed.get(GetMusicService);
    expect(service).toBeTruthy();
  });
});
