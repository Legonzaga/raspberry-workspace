import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpIconSearch } from './rp-icon-search';

describe('RpIconSearch', () => {
  let component: RpIconSearch;
  let fixture: ComponentFixture<RpIconSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpIconSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpIconSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
