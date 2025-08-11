export interface RpPageable {
  sort?: RpSort;
  pageSize: number;
  pageNumber: number;
  offset?: number;
  paged?: boolean;
  unpaged?: boolean;
  totalPages?: number;
  totalElements?: number;
  size?: number;
  action?: any;
}

export interface RpSort {
  sorted?: boolean;
  unsorted?: boolean;
  empty?: boolean
}
