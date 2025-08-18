import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Producers } from './producers';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RpTableContent } from '@raspberry-lib';

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

  it('should create a table with producers with longest interval between wins', () => {

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

    component.maximumTableDataSource = mockDataSource;

    fixture.detectChanges();

    expect(component.maximumTableDataSource).toEqual(mockDataSource);
    expect(component.maximumTableDataSource.columns?.length).toBe(2);
    expect(component.maximumTableDataSource.rows?.length).toBe(2);

  });

  it('should create a table with producers with minimum interval between wins', () => {

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

    component.minimumTableDataSource = mockDataSource;

    fixture.detectChanges();
    fixture.whenRenderingDone()

    expect(component.minimumTableDataSource).toEqual(mockDataSource);
    expect(component.minimumTableDataSource.columns?.length).toBe(2);
    expect(component.minimumTableDataSource.rows?.length).toBe(2);

  });


});
