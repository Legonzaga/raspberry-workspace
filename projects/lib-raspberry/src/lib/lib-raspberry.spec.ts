import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibRaspberry } from './lib-raspberry';

describe('LibRaspberry', () => {
  let component: LibRaspberry;
  let fixture: ComponentFixture<LibRaspberry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibRaspberry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibRaspberry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
