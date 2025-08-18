import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  RpToolbar,
  RpMenu,
  RpMenuItem,
} from '@raspberry-lib';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RpToolbar, RpMenu ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('raspberry-app');

  menuItem: RpMenuItem[] = [
    { url: 'dashboard', name: 'Dashboard' },
    { url: 'list', name: 'List', params: { pageNumber: 0 } }
  ];

}
