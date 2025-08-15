import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RpCard, RpTable, RpTableContent } from '@raspberry-lib';
import { GoldenApiService } from '../core/service/golden-api/golden-api';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [RpCard, RpTable],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  dataSource: RpTableContent = {
    align: 'center',
    columns: [
      { text: 'Id', key: 'id' },
      {
        text: 'Year',
        key: 'year',
        filter: {
          type: 'number',
        },
      },
      { text: 'Title', key: 'title' },
      {
        text: 'Winner',
        key: 'winner',
        filter: {
          type: 'select',
          options: [
            { key: 'Yes/No', value: '' },
            { key: 'Yes', value: 1 },
            {key:'No', value: 0 }
          ],
        },
      },
    ],
    rows: [],
    paginator: {
      pageNumber: 0,
      pageSize: 15,
      paged: true,
      unpaged: false,
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
    },
  };

  filters = {
    year: '',
    winner: false
  };
  urlSuffix: string = '';

  constructor(
    private goldenApi: GoldenApiService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getMovies(this.dataSource.paginator?.pageNumber!, this.dataSource.paginator?.pageSize!);
  }

  getMovies(page: number, size: number, year?: number, winner?: boolean) {

    let url = this.urlBuilder(page, size, this.filters.winner, this.filters.year)

    this.goldenApi.listMovies(url)
    .pipe(
      map( movies => ({
          rows: movies.content.map( (movie) => ({
              id: movie.id,
              year: movie.year,
              title: movie.title,
              winner: movie.winner ? 'Yes' : 'No',
            })
          ),
          paginator : {
            totalPages: movies.totalPages,
            totalElements: movies.totalElements,
            first: movies.first,
            last: movies.last,
            sort : movies.sort,
            pageNumber: movies.pageable.pageNumber,
            pageSize: movies.pageable.pageSize,
            paged: movies.pageable.paged,
            unpaged: movies.pageable.unpaged,
            action: (page: number, size: number, year?: number, winner?: boolean,) => {
               this.getMovies(page, size, year, winner);
               this.changeDetector.detectChanges();
            }
          }
        })
      ),
    )
    .subscribe({
      next: (response) => {
        this.dataSource.rows = [];
        this.dataSource.rows = response.rows;
        this.dataSource.paginator = response.paginator;
      },
    });
  }

  getFilters(event: any) {
    this.filters = event;
    this.getMovies(0, this.dataSource.paginator?.pageSize!);
  }

  /**
   * * Constructs an url to search movies
   * @param pageable : Pageale => Pagination settings
   * @param winner: boolean => yes:true / no:false
   * @param year : number => movie year
   * @returns : string => An URL to listMovies method
   */
  urlBuilder(page: number, size: number, winner: any, year: any): string {

    let url: string = '?';

    if (page >= 0) {
      url += `page=${page}`;
    }

    if (size) {
      url += `&size=${size}`;
    }

    if (winner) {
      url += `&winner=${this.filters?.winner}`;
    }

    if (year) {
      url += `&year=${this.filters?.year}`;
    }
    return url;
  }
}
