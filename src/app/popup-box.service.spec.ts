import { TestBed, inject } from '@angular/core/testing';

import { PopupBoxService } from './popup-box.service';

describe('PopupBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupBoxService]
    });
  });

  it('should be created', inject([PopupBoxService], (service: PopupBoxService) => {
    expect(service).toBeTruthy();
  }));
});
