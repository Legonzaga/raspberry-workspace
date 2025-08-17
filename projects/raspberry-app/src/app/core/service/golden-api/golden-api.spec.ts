import { TestBed } from '@angular/core/testing';

import { GoldenApiService } from './golden-api';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MovieTestData } from './golden-api.test.data';

describe('GoldenApi', () => {
  let service: GoldenApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoldenApiService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(GoldenApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should list movies given the parameters below', () => {
    service.listMovies('?page=0&size=2').subscribe({
      next: (movies: any) => {
        expect(movies).toEqual(MovieTestData.mockMoviesList);
      },
    });

    const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies?page=0&size=2');
    req.flush(MovieTestData.mockMoviesList);
  });

  it('List movie winners by year', () => {
    service.listMoviesWinnersByYear(2015).subscribe({
      next: (movies) => {
        expect(movies).toEqual(MovieTestData.winnersByYear);
      },
    });

    const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies/winnersByYear?year=2015');
    req.flush(MovieTestData.winnersByYear);
  });

  it('should list producers with the longest and shortest interval between victories', () => {
    service.producersWinInterval()
    .subscribe({
      next: (producers) => {
        expect(producers).toEqual(MovieTestData.maxMinWinIntervalForProducers) ;
      },
    });

    const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies/maxMinWinIntervalForProducers');
    req.flush(MovieTestData.maxMinWinIntervalForProducers);
  });

  it('Should lists studios winners', () => {
      service.listWinnersStudios()       
      .subscribe({
        next: (movies) => {
          expect(movies).toEqual(MovieTestData.mostWinnersList);
        },
      });

      const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies/studiosWithWinCount');
      req.flush(MovieTestData.mostWinnersList);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
