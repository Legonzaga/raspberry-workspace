import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Producers } from './producers';

describe('Producers', () => {
  let component: Producers;
  let fixture: ComponentFixture<Producers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Producers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Producers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
