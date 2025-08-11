import { Component } from '@angular/core';
import { MultipleWinners } from './multiple-winners/multiple-winners';
import { Producers } from './producers/producers';
import { TopWinners } from './top-winners/top-winners';
import { WinnersByYear } from './winners-by-year/winners-by-year';

@Component({
  selector: 'app-dashboard',
  imports: [
    MultipleWinners,
    Producers,
    TopWinners,
    WinnersByYear
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
