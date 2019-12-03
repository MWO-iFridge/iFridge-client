import { TestBed } from '@angular/core/testing';

import { ListStorageService } from './list-storage.service';

describe('ListStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListStorageService]
    });
  });

  it('should be created', inject([ListStorageService], (service: ListStorageService) => {
    expect(service).toBeTruthy();
  }));
});
