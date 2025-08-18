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
        provideHttpClient(),
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

  it('should check if table with top winners was created', () => {

    fixture.detectChanges();

    expect(component.tableDataSource.columns![0].text).toEqual('Name');
    expect(component.tableDataSource.columns![1].text).toEqual('Win Count');

    const compile = fixture.nativeElement as HTMLElement;

    const table = compile.querySelectorAll('rp-table')

    expect(table).toBeTruthy();

  });


});
