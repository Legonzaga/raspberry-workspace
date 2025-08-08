import { Component, input, OnInit } from '@angular/core';
import { RpTableColumn, RpTableRow } from '../../models/rp-table.types';
import { RpPaginator } from '../rp-paginator/rp-paginator';
import { RpInput } from '../forms/input/rp-input';
import {
  Form,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { from, pipe, map, startWith, filter, tap } from 'rxjs';

@Component({
  selector: 'rp-table',
  imports: [RpPaginator, RpInput, ReactiveFormsModule],
  templateUrl: './rp-table.html',
  styleUrl: './rp-table.css',
  standalone: true,
})
export class RpTable implements OnInit {
  // columns: RpTableColumn[] = [
  //   { text: 'Title 1', key: 'name' },
  //   { text: 'Title 2', key: 'age' },
  //   { text: 'Title 3', key: 'country' },
  //   { text: 'Title 4', key: 'role' },
  // ];

  // rows: RpTableRow[] = [
  //   { name: 'Lean', age: 40, country: 'BRAZIL', role: 'Developer' },
  //   { name: 'Dani', age: 36, country: 'BRAZIL', role: 'Engineer' },
  //   { name: 'Arthur', age: 13, country: 'BRAZIL', role: 'Estudante' },
  //   { name: 'Eliseu', age: 6, country: 'BRAZIL', role: 'Estudante' },

  // ];

  columns = input<RpTableColumn[]>();

  rows = input<RpTableRow[]>();

  filteredRows: RpTableRow[] = [];

  filterForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const cols = this.columns();

    if (!cols?.length) return;

    let controls: { [key: string]: unknown } = {};

    cols.forEach((column) => {
      if (column.filter) {
        controls[column.key] = [''];
      }
    });

    this.filterForm = this.formBuilder.group(controls);
  }

  inputFiltering(event: Event, field: string) {
    const filters = this.filterForm?.value || {};

    console.log(filters)

    if(!event) {
      this.filteredRows = [];
      return
    };

    if (!this.rows()) {
      throw 'Sem linhas';
    }

    this.filteredRows = this.rows()!.filter((row) => {
      const cell = String(row[field] ?? '').toLowerCase();
      return cell.includes(this.filterForm?.controls[field].value.toLowerCase());
    });

  }
}
