import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RpTable } from '@raspberry-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RpTable],
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('raspberry-app');
}
