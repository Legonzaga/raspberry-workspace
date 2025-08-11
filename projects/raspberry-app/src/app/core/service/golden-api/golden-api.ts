import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { SearchMovie } from '../../models/search';
import { StudioList } from '../../models/studios';
import { YearMultipleWinner } from '../../models/year-multiple-winner';
import { Interval } from '../../models/interval';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GoldenApiService {
  private http = inject(HttpClient);

  constructor() {}

  /**
   * * Lists movies winners by year
   * @param year : number
   * @returns : Movie[]
   */
  listMoviesWinnersByYear(year: number): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(environment.apiUrl + `movies/winnersByYear?year=${year}`);
  }

  /**
   * * List movies given the parameters below:
   * @param search : Paginator => Pagination attributes are setted here
   * @param winner : boolean => yes : true / no : false
   * @param year : number => Movie year
   * @returns : Observable<SearchMovie>
   */
  listMovies(urlSuffix: string): Observable<SearchMovie> {
    return this.http.get<SearchMovie>(`${environment.apiUrl}movies${urlSuffix}`);
  }

  /**
   * * List producers with the longest and shortest interval between victories
   * @returns: Interval
   */
  producersWinInterval(): Observable<Interval> {
    return this.http.get<Interval>(
      environment.apiUrl + `movies/maxMinWinIntervalForProducers`
    );
  }

  /**
   * Lists studios winners
   * @returns
   */
  listWinnersStudios(): Observable<StudioList> {
    return this.http.get<StudioList>(
      environment.apiUrl + `movies/studiosWithWinCount`
    );
  }

  listYearsWithMostWinners(): Observable<YearMultipleWinner> {
    return this.http.get<YearMultipleWinner>(
      environment.apiUrl + `movies/yearsWithMultipleWinners`
    );
  }
}
