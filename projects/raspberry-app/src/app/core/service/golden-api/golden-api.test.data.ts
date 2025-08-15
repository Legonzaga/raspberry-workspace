export const MockMoviesList = {
  content: [
    {
      id: 1,
      year: 1980,
      title: "Can't Stop the Music",
      studios: ['Associated Film Distribution'],
      producers: ['Allan Carr'],
      winner: true,
    },
    {
      id: 2,
      year: 1980,
      title: 'Cruising',
      studios: ['Lorimar Productions', 'United Artists'],
      producers: ['Jerry Weintraub'],
      winner: false,
    },
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
  {
    id: 182,
    year: 2015,
    title: 'Fifty Shades of Grey',
    studios: ['Focus Features', 'Universal Pictures'],
    producers: ['Dana Brunetti', 'E. L. James', 'Michael De Luca'],
    winner: true,
  },
];

export const MaxMinWinIntervalForProducers = {
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

export const MovieTestData = {
  mockMoviesList: MockMoviesList,
  winnersByYear: WinnersByYear,
  maxMinWinIntervalForProducers: MaxMinWinIntervalForProducers,
};
