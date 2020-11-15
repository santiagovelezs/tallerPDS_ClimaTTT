import { TestBed } from '@angular/core/testing';

import { TriquiService } from './triqui.service';

describe('TriquiService', () => {
  let service: TriquiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriquiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
