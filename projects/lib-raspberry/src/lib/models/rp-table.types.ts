import { RpPageable } from "./rp-pageable.type";

export interface RpTableColumn {
  text: string;
  key: string;
  filter?: {
    type: 'text' | 'number' | 'select';
    options?: RpTableColumnOption[];
  }
}

export interface RpTableRow {
  [key: string]: unknown;
}

export interface RpTableColumnOption {
  key: string | boolean | number;
  value?: string | boolean | number;
}

export interface RpTableContent {
  align?: 'left' | 'center' | 'right';
  columns?: RpTableColumn[],
  rows?: RpTableRow[],
  paginator?: RpPageable;
}
