import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './screens/main-page/main-page.component';
import { SearchPageComponent } from './screens/search-page/search-page.component';
import { AddLinkPageComponent } from './screens/add-link-page/add-link-page.component';

export const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'main-page', component: MainPageComponent},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'add-link-page', component: AddLinkPageComponent},
];
