import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producers } from './producers';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('Producers', () => {
  let component: Producers;
  let fixture: ComponentFixture<Producers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Producers,
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]      
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
