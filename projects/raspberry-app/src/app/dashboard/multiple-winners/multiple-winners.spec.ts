import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWinners } from './multiple-winners';

describe('MultipleWinners', () => {
  let component: MultipleWinners;
  let fixture: ComponentFixture<MultipleWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleWinners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
