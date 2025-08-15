import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { List } from './list/list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'list/:pageNumber',
    component: List,
  },
];
