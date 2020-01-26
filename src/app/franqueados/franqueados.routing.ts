import { Routes } from '@angular/router';
import { FranqueadoDetailsComponent } from './franqueado-details/franqueado-details.component';
import { FranqueadoListComponent } from './franqueado-list/franqueado-list.component';

export const FranqueadosRoutes: Routes = [
  {
    path: '',
    component: FranqueadoListComponent
  },
  {
    path: 'create',
    component: FranqueadoDetailsComponent
  },
  {
    path: 'edit/:id',
    component: FranqueadoDetailsComponent
  }
];
