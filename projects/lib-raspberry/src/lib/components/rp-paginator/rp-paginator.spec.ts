import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpPaginator } from './rp-paginator';

describe('RpPaginator', () => {
  let component: RpPaginator;
  let fixture: ComponentFixture<RpPaginator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpPaginator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpPaginator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
