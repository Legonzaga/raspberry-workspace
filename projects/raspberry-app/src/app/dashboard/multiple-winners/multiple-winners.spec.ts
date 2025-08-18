import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleWinners } from './multiple-winners';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RpTableContent } from '@raspberry-lib';
import { By } from '@angular/platform-browser';

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

  it('Should check if table was filled', () => {

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

    component.tableDataSource = mockDataSource;

    fixture.detectChanges();

    expect(component.tableDataSource).toEqual(mockDataSource);
    expect(component.tableDataSource.columns?.length).toBe(2);
    expect(component.tableDataSource.rows?.length).toBe(2);

  });

});
