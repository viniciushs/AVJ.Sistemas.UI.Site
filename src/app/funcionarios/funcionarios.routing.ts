import { Routes } from '@angular/router';

import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';

export const FuncionariosRoutes: Routes = [
  {
    path: '',
    component: FuncionarioListComponent
  },
  {
    path: 'create',
    component: FuncionarioDetailsComponent
  },
  {
    path: 'edit/:id',
    component: FuncionarioDetailsComponent
  }
];
