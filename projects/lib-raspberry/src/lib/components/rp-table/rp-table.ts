import { Component, input, OnInit, output } from '@angular/core';
import { RpTableColumn, RpTableContent, RpTableRow } from '../../models/rp-table.types';
import { RpPaginator } from '../rp-paginator/rp-paginator';
import { RpInput } from '../../directives/input/rp-input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, throttleTime } from 'rxjs';

@Component({
  selector: 'rp-table',
  imports: [RpPaginator, RpInput, ReactiveFormsModule, CommonModule],
  templateUrl: './rp-table.html',
  styleUrl: './rp-table.css',
  standalone: true,
})
export class RpTable implements OnInit {

  tableDataSource = input<RpTableContent>({
    align: 'left',
    columns: [],
    rows: []
   });

  columns = input<RpTableColumn[]>();

  rows = input<RpTableRow[]>();

  filteredRows: RpTableRow[] = [];

  filterForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  getSelectedFilter = output();

  ngOnInit() {

    const cols = this.tableDataSource().columns;

    if (!cols?.length) return;

    let controls: { [key: string]: unknown } = {};

    cols.forEach((column) => {
      if (column.filter) {
        controls[column.key] = [''];
      }
    });

    this.filterForm = this.formBuilder.group(controls);

    this.inputFiltering();
  }

  inputFiltering() {

    this.filterForm?.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe({
      next: (filters: any) => {
        this.getSelectedFilter.emit(filters);
      },
      error: (err: any) => {
        throw(err);
      }
    });
  }
}
