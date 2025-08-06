import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RpTable, RpToolbar } from '@raspberry-lib';
import { RpCard } from '@raspberry-lib';
import { RpTableColumn, RpTableRow } from '../../../lib-raspberry/src/lib/models/rp-table.types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RpTable, RpCard, RpToolbar ],
templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('raspberry-app');


  columns: RpTableColumn[] = [
    { text: 'Name', key: 'name' },
    { text: 'Age', key: 'age' },
    { text: 'Country', key: 'country' },
    { text: 'Role', key: 'role' },
  ];

  rows: RpTableRow[] = [
    // { name: 'Lean', age: 40, country: 'BRAZIL', role: 'Developer' },
    // { name: 'Dani', age: 36, country: 'BRAZIL', role: 'Engineer' },
    // { name: 'Arthur', age: 13, country: 'EUA', role: 'Estudante' },
    // { name: 'Eliseu', age: 6, country: 'BRAZIL', role: 'Estudante' },

  ];

}
