import { TestBed, inject } from '@angular/core/testing';

import { GetPlaylistService } from './get-playlist.service';

describe('GetPlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPlaylistService]
    });
  });

  it('should be created', inject([GetPlaylistService], (service: GetPlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
