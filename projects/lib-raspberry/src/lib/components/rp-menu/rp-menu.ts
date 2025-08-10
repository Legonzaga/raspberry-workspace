import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RpMenuItem } from '../../models/rp-menu.types';

@Component({
  selector: 'rp-menu',
  imports: [ RouterModule ],
  templateUrl: './rp-menu.html',
  styleUrl: './rp-menu.css',
  standalone: true,
})
export class RpMenu {

  menu = input<RpMenuItem[]>([]);

}
