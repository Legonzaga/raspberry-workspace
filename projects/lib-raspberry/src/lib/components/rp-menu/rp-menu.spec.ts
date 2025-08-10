import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpMenu } from './rp-menu';

describe('RpMenu', () => {
  let component: RpMenu;
  let fixture: ComponentFixture<RpMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
