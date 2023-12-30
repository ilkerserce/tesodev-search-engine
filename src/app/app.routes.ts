import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './screens/main-page/main-page.component';
import { SearchPageComponent } from './screens/search-page/search-page.component';
import { AddLinkPageComponent } from './screens/add-link-page/add-link-page.component';
import { ScreenTestPageComponent } from './screens/screen-test-page/screen-test-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/main-page/main-page.component').then(mod => mod.MainPageComponent)
  },
  {
    path: 'main-page',
    loadComponent: () => import('./screens/main-page/main-page.component').then(mod => mod.MainPageComponent)
  },
  {
    path: 'search-page',
    loadComponent: () => import('./screens/search-page/search-page.component').then(mod => mod.SearchPageComponent)
  },
  {
    path: 'add-link-page',
    loadComponent: () => import('./screens/add-link-page/add-link-page.component').then(mod => mod.AddLinkPageComponent)
  },
  {
    path: 'test',
    loadComponent: () => import('./screens/screen-test-page/screen-test-page.component').then(mod => mod.ScreenTestPageComponent)
  },
];
