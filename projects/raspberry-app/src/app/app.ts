import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RpTable, RpToolbar, RpCard, RpTableColumn, RpTableRow } from '@raspberry-lib';

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
    { text: 'Age', key: 'age', filter : { type: 'text', } },
    { text: 'Country', key: 'country' },
    { text: 'Role', key: 'role', filter : { type: 'select', options: [ 'Developer', 'Head' ]}  },
  ];

  rows: RpTableRow[] = [
    { name: 'Lean', age: 40, country: 'BRAZIL', role: 'Developer' },
    { name: 'Dani', age: 36, country: 'BRAZIL', role: 'Engineer' },
    { name: 'Arthur', age: 'Porta', country: 'EUA', role: 'Developer' },
    { name: 'Eliseu', age: 6, country: 'BRAZIL', role: 'Estudante' },
  ];

}
