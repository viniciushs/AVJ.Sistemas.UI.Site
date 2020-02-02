import { Routes } from '@angular/router';

import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';

export const CargosRoutes: Routes = [
  {
    path: '',
    component: CargoListComponent,
    data: {
      breadcumb: [
        {
          title: 'Cargos'
        }
      ]
    }
  },
  {
    path: 'create',
    component: CargoDetailsComponent,
    data: {
      breadcumb: [
        {
          title: 'Cargos',
          route: 'cargo'
        },
        {
          title: 'Novo Cargo'
        }
      ]
    }
  },
  {
    path: 'edit/:id',
    component: CargoDetailsComponent,
    data: {
      breadcumb: [
        {
          title: 'Cargos',
          route: 'cargo'
        },
        {
          title: 'Edição de Cargo'
        }
      ]
    }
  }
];
