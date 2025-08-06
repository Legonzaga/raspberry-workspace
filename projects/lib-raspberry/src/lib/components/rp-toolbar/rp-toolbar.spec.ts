import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpToolbar } from './rp-toolbar';

describe('RpToolbar', () => {
  let component: RpToolbar;
  let fixture: ComponentFixture<RpToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
