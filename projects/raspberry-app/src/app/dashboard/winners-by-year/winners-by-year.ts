import { Component } from '@angular/core';
import {
  RpCard,
  RpInput,
  RpTable,
  RpTableColumn,
  RpTableRow,
  RpButton,
  RpIconSearch,
  RpTableContent,
} from '@raspberry-lib';
import { GoldenApiService } from '../../core/service/golden-api/golden-api';
import { map } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-winners-by-year',
  imports: [
    RpCard,
    RpTable,
    ReactiveFormsModule,
    RpInput,
    RpButton,
    RpIconSearch,
  ],
  templateUrl: './winners-by-year.html',
  styleUrl: './winners-by-year.css',
  standalone: true,
})
export class WinnersByYear {

  dataSource: RpTableContent = {
    align: 'left',
    columns: [
      { text: 'Id', key: 'id' },
      { text: 'Year', key: 'year' },
      { text: 'Title', key: 'title' },
    ],
    rows: []
  };

  filterForm: FormGroup;

  constructor(
    private goldenApi: GoldenApiService,
    private formBuilder: FormBuilder
  ) {
    this.filterForm = formBuilder.group({
      year: [null, Validators.maxLength(4)],
    });
  }

  getWinnersByYear() {
    const year = this.filterForm.controls['year'].value;

    this.goldenApi
      .listMoviesWinnersByYear(year)
      .pipe(
        map((movies) =>
          movies.map((movie) => ({
            id: movie.id,
            year: movie.year,
            title: movie.title,
          }))
        )
      )
      .subscribe({
        next: (response) => {
          this.dataSource.rows = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
