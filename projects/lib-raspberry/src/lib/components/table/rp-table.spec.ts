import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpTable } from './rp-table';

describe('Table', () => {
  let component: RpTable;
  let fixture: ComponentFixture<RpTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
