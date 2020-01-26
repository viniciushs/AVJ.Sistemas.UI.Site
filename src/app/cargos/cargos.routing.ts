import { Routes } from '@angular/router';

import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';

export const CargosRoutes: Routes = [
  {
    path: '',
    component: CargoListComponent
  },
  {
    path: 'create',
    component: CargoDetailsComponent
  },
  {
    path: 'edit/:id',
    component: CargoDetailsComponent
  }
];
