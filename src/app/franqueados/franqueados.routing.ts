import { Routes } from '@angular/router';
import { FranqueadoDetailsComponent } from './franqueado-details/franqueado-details.component';
import { FranqueadoListComponent } from './franqueado-list/franqueado-list.component';

export const FranqueadosRoutes: Routes = [
  {
    path: '',
    component: FranqueadoListComponent,
    data: {
      breadcumb: [
        {
          title: 'Franqueados'
        }
      ]
    }
  },
  {
    path: 'create',
    component: FranqueadoDetailsComponent,
    data: {
      breadcumb: [
        {
          title: 'Franqueados',
          route: 'franqueado'
        },
        {
          title: 'Novo Franqueado'
        }
      ]
    }
  },
  {
    path: 'edit/:id',
    component: FranqueadoDetailsComponent,
    data: {
      breadcumb: [
        {
          title: 'Franqueados',
          route: 'franqueado'
        },
        {
          title: 'Edição de Franqueado'
        }
      ]
    }
  }
];
