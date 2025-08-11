import { Component, OnInit } from '@angular/core';
import { RpCard, RpTable, RpTableContent } from '@raspberry-lib';
import { GoldenApiService } from '../../core/service/golden-api/golden-api';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-multiple-winners',
  imports: [RpCard, RpTable],
  templateUrl: './multiple-winners.html',
  styleUrl: './multiple-winners.css',
  standalone: true,
})
export class MultipleWinners implements OnInit {
  tableDataSource: RpTableContent = {
    align: 'left',
    columns: [
      { text: 'Year', key: 'year' },
      { text: 'Win Count', key: 'count' },
    ],
    rows: [],
  };

  constructor(private goldenApi: GoldenApiService) {}

  ngOnInit() {
    this.getYearsWithMostWinnersList();
  }

  getYearsWithMostWinnersList() {
    this.goldenApi
      .listYearsWithMostWinners()
      .pipe(
        map((winners) =>
          winners.years.map((winner) => ({
            year: winner.year,
            count: winner.winnerCount,
          }))
        )
      )
      .subscribe({
        next: (response) => {
          this.tableDataSource.rows = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
