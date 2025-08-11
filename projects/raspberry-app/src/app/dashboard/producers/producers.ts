import { Component, OnInit } from '@angular/core';
import { RpCard, RpTable, RpTableContent } from '@raspberry-lib';
import { GoldenApiService } from '../../core/service/golden-api/golden-api';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-producers',
  imports: [RpCard, RpTable],
  templateUrl: './producers.html',
  styleUrl: './producers.css',
  standalone: true,
})
export class Producers implements OnInit {

  maximumTableDataSource: RpTableContent = {
    align: 'left',
    columns: [
      { text: 'Producer', key: 'producer' },
      { text: 'Interval', key: 'interval' },
      { text: 'Previous year', key: 'previousYear' },
      { text: 'Following year', key: 'followingYear' },
    ],
    rows: [],
  };

  minimumTableDataSource: RpTableContent = {
    align: 'left',
    columns: [
      { text: 'Producer', key: 'producer' },
      { text: 'Interval', key: 'interval' },
      { text: 'Previous year', key: 'previousYear' },
      { text: 'Following year', key: 'followingYear' },
    ],
    rows: [],
  };

  constructor(private goldenApi: GoldenApiService) {}

  ngOnInit() {
    this.getProducersWinInterval();
  }

  getProducersWinInterval() {
    this.goldenApi
      .producersWinInterval()
      .pipe(
        map((winInterval) => ({
          min: winInterval.min.map((minimum) => ({
            producer: minimum.producer,
            interval: minimum.interval,
            previousYear: minimum.previousWin,
            followingYear: minimum.followingWin,
          })),
          max: winInterval.max.map((maximum) => ({
            producer: maximum.producer,
            interval: maximum.interval,
            previousYear: maximum.previousWin,
            followingYear: maximum.followingWin,
          })),
        }))
      )
      .subscribe({
        next: (response) => {
          this.maximumTableDataSource.rows = response.max;
          this.minimumTableDataSource.rows = response.min;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
