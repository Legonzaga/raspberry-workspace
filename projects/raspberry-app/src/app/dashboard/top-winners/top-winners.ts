import { Component, OnInit } from '@angular/core';
import { RpCard, RpTable, RpTableContent } from '@raspberry-lib';
import { GoldenApiService } from '../../core/service/golden-api/golden-api';
import { map } from 'rxjs';

@Component({
  selector: 'app-top-winners',
  imports: [RpCard, RpTable],
  templateUrl: './top-winners.html',
  styleUrl: './top-winners.css',
  standalone: true
})
export class TopWinners implements OnInit {

  tableDataSource: RpTableContent = {
    align: 'left',
    columns: [
      { text: 'Name', key: 'name' },
      { text: 'Win Count', key: 'count' },
    ],
    rows: [],
  };

  constructor(private goldenApi: GoldenApiService) {}


    ngOnInit() {
      this.listWinnersStudios();
    }

    listWinnersStudios() {
      this.goldenApi
        .listWinnersStudios()
        .pipe(
          map((list) =>
            list.studios.map((studio) => ({
              name: studio.name,
              count: studio.winCount,
            }))
          ),
          map(studios => studios.slice(0, 3))
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
