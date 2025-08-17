import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleWinners } from './multiple-winners';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('MultipleWinners', () => {
  let component: MultipleWinners;
  let fixture: ComponentFixture<MultipleWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MultipleWinners,
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
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
