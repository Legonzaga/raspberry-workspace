import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinnersByYear } from './winners-by-year';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RpTableContent } from '@raspberry-lib';

describe('WinnersByYear', () => {
  let component: WinnersByYear;
  let fixture: ComponentFixture<WinnersByYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersByYear],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersByYear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should check if table was created', () => {

    const mockDataSource: RpTableContent = {
      align: 'left',
      columns: [
        { text: 'Column 1', key: 'col1' },
        { text: 'Column 2', key: 'col2' }
      ],
      rows: [
        { key: 'Row 1', value: 'row1' },
        { key: 'Row 2', value: 'row2' }
      ]
    };

    component.dataSource = mockDataSource;

    fixture.detectChanges();

    expect(component.dataSource).toEqual(mockDataSource);
    expect(component.dataSource.columns?.length).toBe(2);
    expect(component.dataSource.rows?.length).toBe(2);

  });


});
