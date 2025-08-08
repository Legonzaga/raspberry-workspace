export interface RpTableColumn {
  text: string;
  key: string;
  filter?: {
    type: 'text' | 'number' | 'select';
    options?: string[];
  }
}

export interface RpTableRow {
  [key: string]: unknown;
}

