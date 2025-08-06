import { Component, input } from '@angular/core';
import { RpTableColumn, RpTableRow } from '../../models/rp-table.types';

@Component({
  selector: 'rp-table',
  imports: [],
  templateUrl: './rp-table.html',
  styleUrl: './rp-table.css',
})
export class RpTable {

  columns = input.required<RpTableColumn[]>();

  rows = input<RpTableRow[]>();

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

}
