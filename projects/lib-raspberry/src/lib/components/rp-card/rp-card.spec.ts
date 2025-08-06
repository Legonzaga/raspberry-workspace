import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpCard } from './rp-card';

describe('RpCard', () => {
  let component: RpCard;
  let fixture: ComponentFixture<RpCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
