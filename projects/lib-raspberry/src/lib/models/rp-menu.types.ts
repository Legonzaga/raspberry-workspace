import { Params } from '@angular/router';

export interface RpMenuItem {
  url?: string;
  params?: Params;
  name?: string;
  linkActiveClass?: string;
  subItem?: RpMenuItem[]
}
