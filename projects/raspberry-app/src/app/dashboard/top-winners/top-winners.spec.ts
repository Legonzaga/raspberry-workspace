import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopWinners } from './top-winners';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('TopWinners', () => {
  let component: TopWinners;
  let fixture: ComponentFixture<TopWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TopWinners,
      ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
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
