import { Interval } from '../../models/interval';

export const MockMoviesList = {
  content: [
    {
      id: 1,
      year: 1980,
      title: "Can't Stop the Music",
      studios: ['Associated Film Distribution'],
      producers: ['Allan Carr'],
      winner: true,
    }
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 15,
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    offset: 0,
    unpaged: false,
    paged: true,
  },
  totalPages: 14,
  totalElements: 206,
  last: false,
  numberOfElements: 15,
  size: 15,
  number: 0,
  sort: {
    unsorted: true,
    sorted: false,
    empty: true,
  },
  first: true,
  empty: false,
};

export const WinnersByYear = [
  {
    id: 181,
    year: 2015,
    title: 'Fantastic Four',
    studios: ['20th Century Fox'],
    producers: [
      'Gregory Goodman',
      'Hutch Parker',
      'Matthew Vaughn',
      'Robert Kulzer',
      'Simon Kinberg',
    ],
    winner: true,
  },
];

export const MaxMinWinIntervalForProducers: Interval = {
  min: [
    {
      producer: 'Joel Silver',
      interval: 1,
      previousWin: 1990,
      followingWin: 1991,
    },
  ],
  max: [
    {
      producer: 'Matthew Vaughn',
      interval: 13,
      previousWin: 2002,
      followingWin: 2015,
    },
  ],
};

export const MostWinnerList = {
  studios: [
    { name: 'Columbia Pictures', winCount: 7 },
    { name: 'Paramount Pictures', winCount: 6 },
    { name: 'Warner Bros.', winCount: 5 }
  ],
};

export const MovieTestData = {
  mockMoviesList: MockMoviesList,
  winnersByYear: WinnersByYear,
  maxMinWinIntervalForProducers: MaxMinWinIntervalForProducers,
  mostWinnersList: MostWinnerList,
};
