import { TestBed, inject } from '@angular/core/testing';

import { PagelayoutService } from './pagelayout.service';

describe('PagelayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagelayoutService]
    });
  });

  it('should be created', inject([PagelayoutService], (service: PagelayoutService) => {
    expect(service).toBeTruthy();
  }));
});
