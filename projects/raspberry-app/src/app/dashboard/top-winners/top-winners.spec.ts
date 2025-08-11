import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWinners } from './top-winners';

describe('TopWinners', () => {
  let component: TopWinners;
  let fixture: ComponentFixture<TopWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopWinners);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
